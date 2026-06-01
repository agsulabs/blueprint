from fastapi.testclient import TestClient

from src.main import app
from src.modules.status import status_service


client = TestClient(app)


def test_status_endpoint_returns_backend_and_database_status(monkeypatch):
    monkeypatch.setattr(
        status_service,
        "check_database_connection",
        lambda: {
            "connected": True,
            "message": "PostgreSQL ist erreichbar.",
        },
    )

    response = client.get("/api/status")

    assert response.status_code == 200
    assert response.json() == {
        "backend": "Python FastAPI",
        "greeting": "Hallo Gast",
        "status": "online",
        "database": {
            "connected": True,
            "message": "PostgreSQL ist erreichbar.",
        },
    }
