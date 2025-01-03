package com.micro.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddressController {

    @GetMapping("/address")
    public String getAddress(){
        return "Gachibowli-Hyderabad-500081";
    }

}
