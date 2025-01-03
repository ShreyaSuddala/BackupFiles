package com.communication.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/feign1")
public class feign1Controller {

    @GetMapping("/name")
    public String getName(){
        return "Shana";
    }
}
