package com.communication.controller;

import com.communication.service.Weclient2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/web2")
public class Webclient2Controller {

    @Autowired
    private Weclient2Service weclient2Service;

    @GetMapping("/calling")
    public Mono<String> getCall(){
        return weclient2Service.callAnotherService();
    }

}
