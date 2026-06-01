"""
Datei: public_page_router.py

Zweck:
Router-Platzhalter fuer spaetere Inhalte der oeffentlichen Seite.
"""

from fastapi import APIRouter

router = APIRouter(prefix="/api/public-page", tags=["public-page"])
