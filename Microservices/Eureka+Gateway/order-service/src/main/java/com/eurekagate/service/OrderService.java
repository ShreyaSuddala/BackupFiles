package com.eurekagate.service;

import com.eurekagate.common.Payment;
import com.eurekagate.common.TransactionRequest;
import com.eurekagate.common.TransactionResponse;
import com.eurekagate.entity.Order;
import com.eurekagate.repository.OrderRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
@Slf4j
@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private RestTemplate restTemplate;

    public TransactionResponse saveOrder(TransactionRequest request){
        log.info("executed");
        String response = "";
        Order order = request.getOrder();
        Payment payment = request.getPayment();
        payment.setOrderId(order.getId());
        payment.setAmount(order.getPrice());
       Payment paymentResponse= restTemplate.postForObject("http://payment-service/payment/doPayment",payment,Payment.class);
       log.info("executed---1");
       response =paymentResponse.getPaymentStatus().equals("success")?
               "payment processing successful and order placed":"failure in payment";
        orderRepository.save(order);

      return new TransactionResponse(order,paymentResponse.getAmount(),
              paymentResponse.getTransactionId(),response);
    }
}
