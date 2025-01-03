package com.customercrud.service;

import com.customercrud.entity.Customer;
import com.customercrud.repository.CustRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Customerservice  implements CustomerInterface{

    @Autowired
    public CustRepo repo;

    public List<Customer> getAllCustomers(){
        return (List<Customer>) repo.findAll();
    }

    public Customer getCustomerById(int id){
        return repo.findById(id).orElse(null);
    }

    public Customer saveCustomer(Customer customer){
      return  repo.save(customer);
    }

    public void deleteCustomerById(Integer id){
        repo.deleteById(id);
   }



}
