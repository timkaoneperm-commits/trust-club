#!/usr/bin/env python3
"""Локальный сервер Trust-Club: статика + API чата."""

from __future__ import annotations

import json
import secrets
import threading
import time
import uuid
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parent.parent
DATA = Path(__file__).resolve().parent / "data"
CHATS_FILE = DATA / "chats.json"
ORDERS_FILE = DATA / "orders.json"
ADMIN_PASS = "Trust-21"
HOST = "0.0.0.0"
PORT = 8000
LOCK = threading.Lock()


def load_json_list(path: Path) -> list:
    if not path.exists():
        return []
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
        return data if isinstance(data, list) else []
    except (OSError, json.JSONDecodeError):
        return []


def save_json_list(path: Path, items: list) -> None:
    DATA.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(".tmp")
    tmp.write_text(json.dumps(items, ensure_ascii=False, indent=2), encoding="utf-8")
    tmp.replace(path)


def load_chats() -> list:
    return load_json_list(CHATS_FILE)


def save_chats(items: list) -> None:
    save_json_list(CHATS_FILE, items)


def load_orders() -> list:
    return load_json_list(ORDERS_FILE)


def save_orders(items: list) -> None:
    save_json_list(ORDERS_FILE, items)


def make_order_code(existing: set[str]) -> str:
    day = time.strftime("%Y%m%d")
    for _ in range(40):
        code = f"TC-{day}-{secrets.token_hex(3).upper()}"
        if code not in existing:
            return code
    return f"TC-{day}-{uuid.uuid4().hex[:6].upper()}"


def is_admin(handler: "ChatHandler") -> bool:
    return handler.headers.get("X-Admin-Pass", "") == ADMIN_PASS


def json_body(handler: "ChatHandler") -> dict:
    length = int(handler.headers.get("Content-Length") or 0)
    if length <= 0:
        return {}
    raw = handler.rfile.read(min(length, 200_000))
    try:
        data = json.loads(raw.decode("utf-8"))
        return data if isinstance(data, dict) else {}
    except (UnicodeDecodeError, json.JSONDecodeError):
        return {}


class ChatHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, X-Admin-Pass")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def log_message(self, fmt: str, *args):
        if self.path.startswith("/api/"):
            super().log_message(fmt, *args)

    def send_json(self, code: int, payload: dict | list):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/health":
            with LOCK:
                chats = len(load_chats())
                orders = len(load_orders())
            self.send_json(200, {"ok": True, "messages": chats, "orders": orders})
            return
        if parsed.path == "/api/orders":
            qs = parse_qs(parsed.query)
            code = (qs.get("code") or [""])[0].strip().upper()
            email = (qs.get("email") or [""])[0].strip().lower()
            with LOCK:
                items = load_orders()
            if is_admin(self):
                self.send_json(200, {"orders": list(reversed(items))})
                return
            if code:
                found = next((o for o in items if str(o.get("code") or "").upper() == code), None)
                if not found:
                    self.send_json(404, {"error": "not_found"})
                    return
                self.send_json(200, {"order": found})
                return
            if email:
                mine = [o for o in items if str(o.get("email") or "").lower() == email]
                self.send_json(200, {"orders": list(reversed(mine))})
                return
            self.send_json(400, {"error": "email_or_code"})
            return
        if parsed.path == "/api/chat/threads":
            if not is_admin(self):
                self.send_json(401, {"error": "admin"})
                return
            with LOCK:
                items = load_chats()
            latest: dict[str, dict] = {}
            counts: dict[str, int] = {}
            for msg in items:
                thread = str(msg.get("thread") or "")
                if not thread:
                    continue
                counts[thread] = counts.get(thread, 0) + 1
                prev = latest.get(thread)
                if not prev or int(msg.get("at") or 0) > int(prev.get("at") or 0):
                    latest[thread] = msg
            rows = sorted(latest.values(), key=lambda m: int(m.get("at") or 0), reverse=True)
            out = [
                {
                    "thread": msg.get("thread"),
                    "name": msg.get("name"),
                    "text": msg.get("text"),
                    "from": msg.get("from"),
                    "at": msg.get("at"),
                    "count": counts.get(str(msg.get("thread")), 0),
                }
                for msg in rows
            ]
            self.send_json(200, {"threads": out})
            return
        if parsed.path == "/api/chat/messages":
            qs = parse_qs(parsed.query)
            thread = (qs.get("thread") or [""])[0].strip()
            since = int((qs.get("since") or ["0"])[0] or 0)
            with LOCK:
                items = load_chats()
            if is_admin(self) and not thread:
                msgs = [m for m in items if int(m.get("at") or 0) > since]
            elif thread:
                msgs = [
                    m
                    for m in items
                    if m.get("thread") == thread and int(m.get("at") or 0) > since
                ]
            else:
                self.send_json(400, {"error": "thread"})
                return
            self.send_json(200, {"messages": msgs})
            return
        super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/orders":
            data = json_body(self)
            email = str(data.get("email") or "").strip().lower()[:120]
            name = str(data.get("name") or "").strip()[:80] or "Покупатель"
            kind = str(data.get("kind") or "cart").strip()[:40] or "cart"
            region = str(data.get("region") or "").strip()[:120]
            raw_items = data.get("items")
            if not email:
                self.send_json(400, {"error": "email"})
                return
            if not isinstance(raw_items, list) or not raw_items:
                self.send_json(400, {"error": "items"})
                return
            items = []
            for row in raw_items[:40]:
                if not isinstance(row, dict):
                    continue
                pid = str(row.get("id") or "").strip()[:80]
                title = str(row.get("name") or pid).strip()[:120]
                qty = max(1, min(99, int(row.get("qty") or 1)))
                price_rub = max(0, int(row.get("priceRub") or 0))
                if not pid:
                    continue
                items.append({"id": pid, "name": title, "qty": qty, "priceRub": price_rub})
            if not items:
                self.send_json(400, {"error": "items"})
                return
            total_rub = int(data.get("totalRub") or 0)
            if total_rub <= 0:
                total_rub = sum(i["priceRub"] * i["qty"] for i in items)
            profile = data.get("profile") if isinstance(data.get("profile"), dict) else {}
            with LOCK:
                orders = load_orders()
                codes = {str(o.get("code") or "").upper() for o in orders}
                code = make_order_code(codes)
                order = {
                    "code": code,
                    "email": email,
                    "name": name,
                    "kind": kind,
                    "region": region,
                    "items": items,
                    "totalRub": total_rub,
                    "profile": {
                        "firstName": str(profile.get("firstName") or "")[:80],
                        "lastName": str(profile.get("lastName") or "")[:80],
                        "city": str(profile.get("city") or "")[:80],
                        "street": str(profile.get("street") or "")[:120],
                        "house": str(profile.get("house") or "")[:40],
                        "apt": str(profile.get("apt") or "")[:40],
                    },
                    "status": "paid",
                    "at": int(time.time() * 1000),
                }
                orders.append(order)
                if len(orders) > 5000:
                    orders = orders[-5000:]
                save_orders(orders)
            self.send_json(201, {"order": order})
            return
        if parsed.path != "/api/chat/messages":
            self.send_json(404, {"error": "not_found"})
            return
        data = json_body(self)
        text = str(data.get("text") or "").strip()[:500]
        name = str(data.get("name") or "").strip()[:40] or "Покупатель"
        thread = str(data.get("thread") or "").strip()[:120]
        as_admin = bool(data.get("admin")) or is_admin(self)
        if as_admin and not is_admin(self) and str(data.get("adminPass") or "") != ADMIN_PASS:
            self.send_json(401, {"error": "admin"})
            return
        if as_admin and not thread:
            self.send_json(400, {"error": "thread"})
            return
        if not as_admin and not thread:
            thread = "guest-" + secrets.token_hex(4)
        if not text:
            self.send_json(400, {"error": "text"})
            return
        msg = {
            "id": uuid.uuid4().hex[:12],
            "thread": thread,
            "from": "admin" if as_admin else "user",
            "name": "Администратор" if as_admin else name,
            "text": text,
            "at": int(time.time() * 1000),
        }
        with LOCK:
            items = load_chats()
            items.append(msg)
            if len(items) > 5000:
                items = items[-5000:]
            save_chats(items)
        self.send_json(201, {"message": msg})


def main():
    DATA.mkdir(parents=True, exist_ok=True)
    if not CHATS_FILE.exists():
        save_chats([])
    if not ORDERS_FILE.exists():
        save_orders([])
    server = ThreadingHTTPServer((HOST, PORT), ChatHandler)
    print(f"Trust-Club chat на этом ПК: http://127.0.0.1:{PORT}/")
    print(f"С телефона в той же Wi-Fi: http://<IP-этого-ПК>:{PORT}/")
    print("Админ-ключ для API: заголовок X-Admin-Pass = Trust-21")
    print("Заказы: POST/GET /api/orders")
    print("Остановка: Ctrl+C")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nСтоп")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
