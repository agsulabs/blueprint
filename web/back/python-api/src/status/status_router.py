"""
Datei: status_router.py

Zweck:
Diese Datei stellt den HTTP-Endpunkt /api/status bereit.
"""

from fastapi import APIRouter

from src.status.status_service import get_status

router = APIRouter(prefix="/api")


@router.get("/status")
def read_status() -> dict:
    return get_status()