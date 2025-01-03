package com.send.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;

@Service
public class Otpmailservice {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendOtpService(String email) {

        String otp = generateOtp();

        try{
            sendOtpMail(email,otp);
        }
        catch (MessagingException e){
            throw new RuntimeException("unable to send otp.");
        }
    }

        private String generateOtp(){
        SecureRandom random = new SecureRandom();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }
    private void sendOtpMail(String email, String otp) throws MessagingException{
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
        mimeMessageHelper.setTo(email);
        mimeMessageHelper.setSubject("OTP");
        mimeMessageHelper.setText(otp);
        javaMailSender.send(mimeMessage);
    }
}
