package com.diary.service;

import com.diary.dto.UserRegisterDto;

public interface UserRegisterService {

    public UserRegisterDto register(UserRegisterDto userRegisterDto);

    String findByEmail (String email);
}
