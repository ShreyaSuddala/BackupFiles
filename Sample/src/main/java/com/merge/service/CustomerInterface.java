package com.merge.service;

import com.merge.entity.Customer;

import java.util.List;

public interface CustomerInterface {
    public List<Customer> getAllCustomers();
    public Customer getCustomerById(int id);
    public Customer saveCustomer(Customer customer);
    public void deleteCustomerById(Integer id);
}
