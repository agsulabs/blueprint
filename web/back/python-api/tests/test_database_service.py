from src.database import database_service


class FakeCursor:
    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        return False

    def execute(self, query):
        assert query == "SELECT 1"


class FakeConnection:
    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        return False

    def cursor(self):
        return FakeCursor()


def test_check_database_connection_returns_connected_when_query_succeeds(monkeypatch):
    def fake_connect(database_url, connect_timeout):
        assert database_url == database_service.DATABASE_URL
        assert connect_timeout == 2
        return FakeConnection()

    monkeypatch.setattr(database_service.psycopg, "connect", fake_connect)

    assert database_service.check_database_connection() == {
        "connected": True,
        "message": "PostgreSQL ist erreichbar.",
    }


def test_check_database_connection_returns_error_when_query_fails(monkeypatch):
    def fake_connect(database_url, connect_timeout):
        raise RuntimeError(f"database unavailable: {database_url}, {connect_timeout}")

    monkeypatch.setattr(database_service.psycopg, "connect", fake_connect)

    result = database_service.check_database_connection()

    assert result["connected"] is False
    assert "database unavailable" in result["message"]
