package com.merge.controller;

import com.merge.model.MailRequest;
import com.merge.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/mail")
public class MailController {
    private final EmailService emailingService;

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public String sendMail(@RequestBody MailRequest request) throws MessagingException {
        emailingService.sendMail(request);
        return "Email sent successfully";
    }

    @PostMapping("/attach")
    @ResponseStatus(HttpStatus.OK)
    public String sendMailWithAttachment(@RequestParam("toEmail") String toEmail,
                                         @RequestParam("subject") String subject,
                                         @RequestParam("message") String message,
                                         @RequestParam("isHTML") boolean isHTML,
                                         @RequestParam("attachment") MultipartFile attachment) throws MessagingException, IOException {
        MailRequest request = MailRequest.builder()
                .toEmail(toEmail)
                .subject(subject)
                .message(message)
                .isHTML(isHTML)
                .attachment(attachment.getBytes())
                .attachmentName(attachment.getOriginalFilename())
                .build();

        emailingService.sendMail(request);
        return "Email with attachment sent successfully";
    }
}
