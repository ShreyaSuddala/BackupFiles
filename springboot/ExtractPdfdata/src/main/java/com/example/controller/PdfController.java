package com.example.controller;

import com.example.service.PdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/pdf")
public class PdfController {

    @Autowired
    private PdfService pdfService;

    @PostMapping("/extract")
    public ResponseEntity<String> extractTextFromPDF(@RequestParam("file") MultipartFile file) {
        try {
            String extractedText = pdfService.extractTextFromPDF(file);
            return ResponseEntity.ok(extractedText);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Failed to extract text from PDF: " + e.getMessage());
        }
    }
}
