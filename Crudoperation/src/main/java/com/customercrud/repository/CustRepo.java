package com.customercrud.repository;

import com.customercrud.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CustRepo extends JpaRepository<Customer,Integer> {


}
