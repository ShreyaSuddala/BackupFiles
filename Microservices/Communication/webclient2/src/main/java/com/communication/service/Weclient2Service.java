package com.communication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class Weclient2Service {

    @Autowired
    private WebClient.Builder webclientBuilder;

    public Mono<String> callAnotherService(){
        return webclientBuilder.build()
                .get()
                .uri("http://localhost:8083/web1/name")
                .retrieve()
                .bodyToMono(String.class);
    }
}
