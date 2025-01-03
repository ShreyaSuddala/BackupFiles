package com.merge.service;

import com.merge.entity.Customer;
import com.merge.repository.CustRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Customerservice implements CustomerInterface {

    private final CustRepo repo;

    @Autowired
    public Customerservice(CustRepo repo) {
        this.repo = repo;
    }

    public List<Customer> getAllCustomers() {
        return repo.findAll();
    }

    public Customer getCustomerById(int id) {
        return repo.findById(id).orElse(null);
    }

    public Customer saveCustomer(Customer customer) {
        return repo.save(customer);
    }

    public void deleteCustomerById(Integer id) {
        repo.deleteById(id);
    }
}
