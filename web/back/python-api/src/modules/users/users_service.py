"""
Datei: users_service.py

Zweck:
Service-Platzhalter fuer spaetere Benutzer-Logik.
"""

from src.modules.users.users_repository import UsersRepository


class UsersService:
    def __init__(self, users_repository: UsersRepository) -> None:
        self.users_repository = users_repository
