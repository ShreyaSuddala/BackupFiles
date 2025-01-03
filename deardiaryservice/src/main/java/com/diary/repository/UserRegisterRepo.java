package com.diary.repository;

import com.diary.entity.UserRegister;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRegisterRepo extends JpaRepository<UserRegister,Integer> {

    Optional<UserRegister> findByUserId(Integer id);
    Optional<UserRegister> findByEmail(String email);

}
