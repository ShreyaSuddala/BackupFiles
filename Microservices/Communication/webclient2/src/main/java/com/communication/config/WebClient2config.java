package com.communication.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClient2config {


    @Bean
    public WebClient.Builder webclientBuilder(){
        return WebClient.builder();
    }
}
