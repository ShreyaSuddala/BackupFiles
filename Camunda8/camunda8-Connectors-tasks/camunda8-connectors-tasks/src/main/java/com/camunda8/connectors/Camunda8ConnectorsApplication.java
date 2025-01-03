package com.camunda8.connectors;

import io.camunda.zeebe.spring.client.annotation.Deployment;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Deployment(resources = "classpath:**/*.bpmn")
public class Camunda8ConnectorsApplication {

	public static void main(String[] args) {
		SpringApplication.run(Camunda8ConnectorsApplication.class, args);
	}

}
