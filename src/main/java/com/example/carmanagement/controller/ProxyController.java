package com.example.carmanagement.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/proxy")
public class ProxyController {

    private final RestTemplate restTemplate;

    @Value("${proxy.base-url}")
    private String baseUrl;

    public ProxyController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/{path}")
    public ResponseEntity<String> proxyRequest(@PathVariable String path) {
        String targetUrl = baseUrl + "/" + path;
        ResponseEntity<String> response = restTemplate.getForEntity(targetUrl, String.class);
        return new ResponseEntity<>(response.getBody(), response.getStatusCode());
    }
}
