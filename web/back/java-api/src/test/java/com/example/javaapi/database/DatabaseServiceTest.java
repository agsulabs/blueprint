package com.example.javaapi.database;

import org.junit.jupiter.api.Test;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

class DatabaseServiceTest {

    @Test
    void checkConnectionReturnsConnectedWhenQuerySucceeds() {
        DatabaseService databaseService = new DatabaseService(new SuccessfulJdbcTemplate());

        assertThat(databaseService.checkConnection()).isEqualTo(Map.of(
                "connected", true,
                "message", "PostgreSQL ist erreichbar."
        ));
    }

    @Test
    void checkConnectionReturnsErrorWhenQueryFails() {
        DatabaseService databaseService = new DatabaseService(new FailingJdbcTemplate());

        assertThat(databaseService.checkConnection())
                .containsEntry("connected", false)
                .extractingByKey("message")
                .asString()
                .contains("database unavailable");
    }

    private static class SuccessfulJdbcTemplate extends JdbcTemplate {

        @Override
        public <T> T queryForObject(String sql, Class<T> requiredType) {
            assertThat(sql).isEqualTo("SELECT 1");
            return requiredType.cast(1);
        }
    }

    private static class FailingJdbcTemplate extends JdbcTemplate {

        @Override
        public <T> T queryForObject(String sql, Class<T> requiredType) {
            throw new RuntimeException("database unavailable");
        }
    }
}
