package com.communication.util;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(value = "feignDemo" ,url = "http://localhost:8082/feign1")
public interface Feign2inter {

    @GetMapping("/name")
    String getName();
}
