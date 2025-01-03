package com.customercrud.service;

import com.customercrud.entity.Customer;

import java.util.List;

public interface CustomerInterface  {

    public List<Customer> getAllCustomers();
    public Customer getCustomerById(int id);
    public Customer saveCustomer(Customer customer);
    public void deleteCustomerById(Integer id);


}
