package com.eurekagate.controller;

import com.eurekagate.common.Payment;
import com.eurekagate.common.TransactionRequest;
import com.eurekagate.common.TransactionResponse;
import com.eurekagate.entity.Order;
import com.eurekagate.service.OrderService;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/bookOrder")
    public TransactionResponse bookOrder(@RequestBody TransactionRequest request){
    return orderService.saveOrder(request);
    }
    @GetMapping("/wel")
    public String we()
    {
        return "Welcome";
    }
}
