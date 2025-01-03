package com.communication.controller;

import com.communication.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/stu-serv")
public class StudentController {


//    --------------USING RESTTEMPLATE---------------


//    @Autowired
//    private StudentService studentService;
//
//    @GetMapping("/student")
//    public String getDetails(){
//        return studentService.getStudentDetails();
//    }



//    --------USING FEIGN CLIENT-------------

//    @Autowired
//    private StudentInterface studentInterface;
//
//    @GetMapping("/student")
//    public  String getStudentDetails(){
//        return "Student name : Samaira "+studentInterface.getEmployeeDetails();
//
//    }



//    --------------USING WEBCLIENT-------------------


    @Autowired
    private StudentService studentService;

    @GetMapping("/student")
    public String getStudentDetails(){
        return studentService.getStudentdetails() +"  using web";
    }
}
