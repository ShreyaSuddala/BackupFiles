package com.merge.exception;

public class CustomerNotFound extends RuntimeException{

    public CustomerNotFound(String message) {
        super(message);
    }
}
