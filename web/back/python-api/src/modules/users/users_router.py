"""
Datei: users_router.py

Zweck:
Router-Platzhalter fuer spaetere Benutzer-Endpunkte.
"""

from fastapi import APIRouter

router = APIRouter(prefix="/api/users", tags=["users"])
