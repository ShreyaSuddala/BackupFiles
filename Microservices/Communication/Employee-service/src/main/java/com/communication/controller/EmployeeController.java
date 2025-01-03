package com.communication.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/emp-serv")
public class EmployeeController {

    @GetMapping("/emp")
    public String getEmployeeDetails(){
        return "Emp name: Shana"+ "Emp age: 27";
    }
}
