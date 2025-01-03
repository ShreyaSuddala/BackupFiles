package com.eureka.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping
public class ShoppingController {

    @Autowired
    private RestTemplate getTemplate;

    @GetMapping("/shoppingg/{price}")
    public String invokePaymentService(@PathVariable int price){
        String url = "http://PAYMENT-SERVICE/pay/item/"+price;
        return getTemplate.getForObject(url, String.class);
    }

}
