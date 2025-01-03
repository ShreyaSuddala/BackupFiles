package com.employee.service;

import com.employee.entity.Employee;
import com.employee.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class EmployeeServiceimpl implements EmployeeService {
   @Autowired
    private EmployeeRepo emprepo;
    @Override
    public Employee saveEmployee(Employee emp) {
        return emprepo.save(emp);
    }

    @Override
    public List<Employee> fetchEMployeeList() {
        return (List<Employee>) emprepo.findAll();
    }

    @Override
    public Employee updateEmployeeData(Employee emp, Long empId) {
        Optional<Employee> employeeOptional = emprepo.findById(Math.toIntExact(empId));
        if (employeeOptional.isPresent()) {
            Employee existingEmployee = employeeOptional.get();
           existingEmployee.setEmpName(emp.getEmpName());

           existingEmployee.setMobileNumber(emp.getMobileNumber());

           return emprepo.save(existingEmployee);

        } else {
            throw new RuntimeException("Employee not found with ID: " + empId);
        }
    }

    @Override
    public void deleteEMployeebyId(Long empId) {
            emprepo.deleteById(Math.toIntExact(empId));
    }
}
