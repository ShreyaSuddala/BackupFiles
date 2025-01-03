package com.communication.controller;

import com.communication.util.Feign2inter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/feign2")
public class Feign2Controller {

    @Autowired
    private Feign2inter feign2inter;

    @GetMapping("/add")
    public  String getAddress(){
        return "gachibowli      " + feign2inter.getName();
    }
}
