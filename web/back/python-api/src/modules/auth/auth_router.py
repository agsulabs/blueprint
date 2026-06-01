"""
Datei: auth_router.py

Zweck:
Router-Platzhalter fuer spaetere Login- und Session-Endpunkte.
"""

from fastapi import APIRouter

router = APIRouter(prefix="/api/auth", tags=["auth"])
