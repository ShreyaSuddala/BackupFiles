package com.merge.repository;

import com.merge.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface CustRepo extends JpaRepository<Customer,Integer> {


}