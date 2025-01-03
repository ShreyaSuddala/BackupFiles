package com.send.controller;

import com.send.service.Otpmailservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @Autowired
   private Otpmailservice otpmailservice;

    @GetMapping("/")
    public String home(){
        return "this is for just testing purpose";
    }
    @PostMapping("sendotp/{email}")
    public String sendOtpMail(@PathVariable("email") String email){
        otpmailservice.sendOtpService(email);
    return "Otp sent successfully";
    }
}
