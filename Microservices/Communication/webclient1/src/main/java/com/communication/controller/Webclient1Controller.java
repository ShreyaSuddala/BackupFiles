package com.communication.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/web1")
public class Webclient1Controller {

    @GetMapping("/name")
    public  String getName(){
        return "This is Shreya";
    }
}
