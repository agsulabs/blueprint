"""
Datei: main.py

Zweck:
Diese Datei startet die FastAPI-Anwendung.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.status.status_router import router as status_router

app = FastAPI(title="Python Backend Tag 1")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(status_router)