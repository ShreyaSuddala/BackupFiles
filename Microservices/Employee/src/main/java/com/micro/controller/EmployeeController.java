package com.micro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class EmployeeController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/employee")
    public String getEmployeedata(){
        String Address = restTemplate.getForObject("http://localhost:8081/address",String.class);
        return "Emp Name: Shreya, EmpId:1069 "+", Address: "+Address;
}
}
