package com.employee.controller;

import com.employee.entity.Employee;
import com.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    public EmployeeService empservice;

    @GetMapping("/fetchAll")
    public List<Employee> getEmployeeList() {
        return empservice.fetchEMployeeList();
    }

    @PostMapping("/save")
    public Employee saveEmployee(@Valid @RequestBody Employee empdata) {
        return empservice.saveEmployee(empdata);
    }

    @PutMapping("/employee/{id}")
    public Employee
    updateEmployee(@RequestBody Employee emp,
                     @PathVariable("id") Long empId)
    {
        return empservice.updateEmployeeData(emp, empId);
    }

    @DeleteMapping("/employee/{id}")
    public String deleteEmployeeById(@PathVariable("id")
                                       Long empId)
    {
        empservice.deleteEMployeebyId(empId);
        return "Employee Data deleted successfully";
    }
}
