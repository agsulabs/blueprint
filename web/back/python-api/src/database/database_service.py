"""
Datei: database_service.py

Zweck:
Diese Datei prüft, ob PostgreSQL erreichbar ist.
"""

import psycopg

from src.config.settings import DATABASE_URL


def check_database_connection() -> dict:
    try:
        with psycopg.connect(DATABASE_URL, connect_timeout=2) as connection:
            with connection.cursor() as cursor:
                cursor.execute("SELECT 1")

        return {
            "connected": True,
            "message": "PostgreSQL ist erreichbar.",
        }
    except Exception as error:
        return {
            "connected": False,
            "message": str(error),
        }