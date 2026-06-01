"""
Datei: status_service.py

Zweck:
Diese Datei baut die Status-Antwort für das Frontend.
"""

from src.database.database_service import check_database_connection


def get_status() -> dict:
    database = check_database_connection()

    return {
        "backend": "Python FastAPI",
        "greeting": "Hallo Gast",
        "status": "online",
        "database": database,
    }