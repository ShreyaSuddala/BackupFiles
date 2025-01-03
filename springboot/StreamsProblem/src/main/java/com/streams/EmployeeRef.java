package com.streams;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class EmployeeRef {
    public static void main(String[] args) {

        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee("Abdul","Kalam","Male",5653467));
        employees.add(new Employee("Salman","khan","Male",78980));
        employees.add(new Employee("Sharifa","Begum","Female",77467));
        employees.add(new Employee("Vijaya","Lakshmi","Female",65467));


         employees.stream()
                .filter(n -> n.getFirstName().startsWith("S"))
                .collect(Collectors.toList())
                 .forEach(i->System.out.println(i.getFirstName()));

         employees.stream()
                 .filter(k->k.getGender().equals("Male"))
                 .collect(Collectors.toList())
                 .forEach(p->System.out.println(p.getFirstName()));

        List<String> femaleEmployeeNames = employees.stream()
                .filter(n -> n.getGender().equals("Female"))
                .map(Employee::getFirstName)
                .collect(Collectors.toList());


        System.out.println("Female Employees: " + femaleEmployeeNames);

//        Finding employees salary get than 50000
        List<String> SalaryEmp = employees.stream()
                .filter(sal -> sal.getSalary()>80000)
                .map(Employee::getFirstName)
                .collect(Collectors.toList());

        System.out.println("Salary greater than 80000 "+ SalaryEmp);

//        Find total salary of all Employees

       int t= employees.stream()
                .mapToInt(Employee::getSalary).sum();

       System.out.println("total salary "+t);

//       get the name of Employee with min salary

      String getEmployeewithminSalary = employees.stream()
              .min(Comparator.comparing(Employee::getSalary))
              .map(n->n.getFirstName())
              .orElseThrow();

      System.out.println("Employee with min salary: "+getEmployeewithminSalary);


        Map<String, List<Employee>> groupedByGender = employees.stream()
                .collect(Collectors.groupingBy(emp -> emp.getGender()));

        groupedByGender.forEach((gender, employeeList) -> {
            System.out.println(gender + " -> " + employeeList);
        });




        









    }
}
