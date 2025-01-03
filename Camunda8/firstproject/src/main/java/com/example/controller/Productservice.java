package com.example.controller;

import io.camunda.zeebe.spring.client.annotation.JobWorker;

import io.camunda.zeebe.spring.client.annotation.ZeebeVariable;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class Productservice {

    @JobWorker(type = "product" , autoComplete = true)
   public Map<String,Object> getProduct(){
        System.out.println("---services task exceuted---");
        HashMap<String,Object> variable = new HashMap<>();
        variable.put("productId","100");
        return variable;
    }

    @JobWorker(type = "getProduct",autoComplete = true)
    public void getSample(@ZeebeVariable String productId){
        System.out.println("---varaiables task executed---");
        System.out.println("productId  "+productId);
    }

    @JobWorker(type = "send" ,autoComplete = true)
    public void getMessage(){
        System.out.println("send task executed successfully");
    }
}
