"""
Datei: main.py

Zweck:
Diese Datei startet die FastAPI-Anwendung.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.modules.auth.auth_router import router as auth_router
from src.modules.public_page.public_page_router import router as public_page_router
from src.modules.status.status_router import router as status_router
from src.modules.users.users_router import router as users_router

app = FastAPI(title="Python Backend Tag 1")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(status_router)
app.include_router(users_router)
app.include_router(auth_router)
app.include_router(public_page_router)
