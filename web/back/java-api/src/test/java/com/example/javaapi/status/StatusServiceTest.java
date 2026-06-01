package com.example.javaapi.status;

import com.example.javaapi.database.DatabaseService;
import org.junit.jupiter.api.Test;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

class StatusServiceTest {

    @Test
    void getStatusIncludesBackendAndDatabaseStatus() {
        Map<String, Object> databaseStatus = Map.of(
                "connected", true,
                "message", "PostgreSQL ist erreichbar."
        );
        DatabaseService databaseService = new FakeDatabaseService(databaseStatus);

        StatusService statusService = new StatusService(databaseService);

        assertThat(statusService.getStatus()).isEqualTo(Map.of(
                "backend", "Java Spring Boot",
                "greeting", "Hallo Gast",
                "status", "online",
                "database", databaseStatus
        ));
    }

    private static class FakeDatabaseService extends DatabaseService {

        private final Map<String, Object> databaseStatus;

        FakeDatabaseService(Map<String, Object> databaseStatus) {
            super(new JdbcTemplate());
            this.databaseStatus = databaseStatus;
        }

        @Override
        public Map<String, Object> checkConnection() {
            return databaseStatus;
        }
    }
}
