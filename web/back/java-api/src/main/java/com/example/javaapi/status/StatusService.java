package com.example.javaapi.status;

import com.example.javaapi.database.DatabaseService;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * Datei: StatusService.java
 *
 * Zweck:
 * Diese Klasse baut die Status-Antwort für das Frontend.
 */
@Service
public class StatusService {

    private final DatabaseService databaseService;

    public StatusService(DatabaseService databaseService) {
        this.databaseService = databaseService;
    }

    public Map<String, Object> getStatus() {
        return Map.of(
                "backend", "Java Spring Boot",
                "greeting", "Hallo Gast",
                "status", "online",
                "database", databaseService.checkConnection()
        );
    }
}