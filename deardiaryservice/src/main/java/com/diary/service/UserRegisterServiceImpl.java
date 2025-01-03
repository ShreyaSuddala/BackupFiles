package com.diary.service;

import com.diary.dto.UserRegisterDto;
import org.springframework.stereotype.Service;

@Service
public class UserRegisterServiceImpl implements UserRegisterService{
    @Override
    public UserRegisterDto register(UserRegisterDto userRegisterDto) {
        return null;
    }

    @Override
    public String findByEmail(String email) {
        return "";
    }
}
