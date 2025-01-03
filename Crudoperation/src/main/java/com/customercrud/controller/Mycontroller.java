//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.customercrud.controller;

import com.customercrud.entity.Customer;
import com.customercrud.exception.CustomerNotFound;
import com.customercrud.model.PostCustomer;
import com.customercrud.service.CustomerInterface;
import java.util.List;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/customers"})
public class Mycontroller {
    private static final Logger log = LoggerFactory.getLogger(Mycontroller.class);
    @Autowired
    CustomerInterface custservice;

    public Mycontroller() {
    }

    @GetMapping
    public List<Customer> getAll() {
        return this.custservice.getAllCustomers();
    }

    @GetMapping({"/{id}"})
    public Customer getCustomerById(@PathVariable Integer id) {
        if (this.custservice.getCustomerById(id) != null) {
            return this.custservice.getCustomerById(id);
        } else {
            throw new CustomerNotFound("Customer Not Found with ID: " + id);
        }
    }

    @PostMapping
    public ResponseEntity<Customer> createProduct(@RequestBody @Valid PostCustomer postProduct) {
        Customer cust = new Customer();
        cust.setCustomername(postProduct.getCustomername());
        cust.setCustomeraddress(postProduct.getCustomeraddress());
        Customer savedProduct = this.custservice.saveCustomer(cust);
        log.info("product saved successfully");
        return new ResponseEntity(savedProduct, HttpStatus.CREATED);
    }

    @PutMapping({"/{id}"})
    public Customer updateCustomer(@PathVariable Integer id, @RequestBody Customer customer) {
        customer.setCustomerid(id);
        return this.custservice.saveCustomer(customer);
    }

    @DeleteMapping({"/{id}"})
    public String deletCustomer(@PathVariable Integer id) {
        this.custservice.deleteCustomerById(id);
        return "deleted successfully";
    }
}
