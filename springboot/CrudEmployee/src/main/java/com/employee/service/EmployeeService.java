package com.employee.service;

import com.employee.entity.Employee;


import java.util.List;

public interface EmployeeService {

    Employee saveEmployee(Employee emp);

    List<Employee> fetchEMployeeList();

    Employee updateEmployeeData(Employee emp, Long empId);

    void deleteEMployeebyId(Long empId);
}
