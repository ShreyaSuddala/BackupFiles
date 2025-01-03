package com.task.service;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.stereotype.Component;

@Component(value = "ageout")
public class ageoutput implements JavaDelegate {
    @Override
    public void execute(DelegateExecution delegateExecution) throws Exception {
        Object output = delegateExecution.getVariable("output");
        System.out.println("output is : "+ output);
    }
}
