package com.customercrud.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalException {

//    @ExceptionHandler
//    public ResponseEntity<NotFound> handleException(CustomerNotFound cust){
//
//        NotFound error=new NotFound();
//
//        error.setStatus(HttpStatus.NOT_FOUND.value());
//        error.setError(cust.getMessage());
//        error.setTimeStamp(System.currentTimeMillis());
//// Customer Id Not Found cust.getMessage();
//        return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
//    }

    @ExceptionHandler
    public ResponseEntity<NotFound> handleAllException(Exception cust){

        NotFound error=new NotFound();

        error.setStatus(HttpStatus.NOT_FOUND.value());
        error.setError(cust.getMessage());
        error.setTimeStamp(System.currentTimeMillis());
// Customer Id Not Found cust.getMessage();
        return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
    }





}
