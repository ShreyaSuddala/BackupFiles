package com.gateway.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DoctorController {


    @GetMapping("/doctors")
    public String getDoctorslist(){
        return "List of Doctors";
    }
}
