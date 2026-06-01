"""
Datei: settings.py

Zweck:
Diese Datei liest Konfigurationswerte aus der .env-Datei.
"""

import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://admin_panel_user:admin_panel_password@localhost:5432/admin_panel_dev",
)