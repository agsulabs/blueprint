package com.example.javaapi.status;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Datei: StatusController.java
 *
 * Zweck:
 * Diese Klasse stellt den HTTP-Endpunkt /api/status bereit.
 */
@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class StatusController {

    private final StatusService statusService;

    public StatusController(StatusService statusService) {
        this.statusService = statusService;
    }

    @GetMapping("/api/status")
    public Map<String, Object> getStatus() {
        return statusService.getStatus();
    }
}