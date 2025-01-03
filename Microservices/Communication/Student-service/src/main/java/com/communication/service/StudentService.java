package com.communication.service;

import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class StudentService {

//    @Autowired
//    private RestTemplate restTemplate;
//
//
//    public String getStudentDetails(){
//        String url = "http://localhost:8081/emp-serv/emp";
//        return restTemplate.getForObject(url , String.class);
//    }


    @Autowired
    private WebClient.Builder webclientbuilder;

    public String getStudentdetails(){
        return  webclientbuilder.build()
                .get()
                .uri("http://localhost:8081/emp-serv/emp")
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
