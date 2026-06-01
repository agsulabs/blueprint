package com.example.javaapi.database;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * Datei: DatabaseService.java
 *
 * Zweck:
 * Diese Klasse prüft die PostgreSQL-Verbindung.
 */
@Service
public class DatabaseService {

    private final JdbcTemplate jdbcTemplate;

    public DatabaseService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Map<String, Object> checkConnection() {
        try {
            jdbcTemplate.queryForObject("SELECT 1", Integer.class);

            return Map.of(
                    "connected", true,
                    "message", "PostgreSQL ist erreichbar."
            );
        } catch (Exception error) {
            return Map.of(
                    "connected", false,
                    "message", error.getMessage()
            );
        }
    }
}