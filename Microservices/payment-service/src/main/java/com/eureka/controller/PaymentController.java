package com.eureka.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pay")
public class PaymentController {

    @GetMapping("/item/{price}")
    public String paymenthere(@PathVariable int price){
        return "rupees "+price+" paid successfully";
    }
}
