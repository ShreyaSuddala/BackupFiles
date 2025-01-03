// MyController.java
package com.merge.controller;

import com.merge.entity.Customer;
import com.merge.exception.CustomerNotFound;
import com.merge.model.PostCustomer;
import com.merge.repository.CustRepo;
import com.merge.service.CustomerInterface;
import com.merge.service.ExcelService;
import com.merge.service.PdfService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/customers")
public class Mycontroller {
    private static final Logger log = LoggerFactory.getLogger(Mycontroller.class);

    @Autowired
    CustomerInterface custservice;

    @Autowired
    CustRepo custrepo;

    @Autowired
    ExcelService xlservice;

    public Mycontroller() {
    }

    @GetMapping
    public ResponseEntity<List<Customer>> getAll() {
        List<Customer> customers = custservice.getAllCustomers();
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Integer id) {
        Customer customer = custservice.getCustomerById(id);
        if (customer != null) {
            return new ResponseEntity<>(customer, HttpStatus.OK);
        } else {
            log.error("Customer Not Found with ID: {}", id);
            throw new CustomerNotFound("Customer Not Found with ID: " + id);
        }
    }

    @PostMapping
    public ResponseEntity<Customer> createCustomer(@RequestBody @Valid PostCustomer postCustomer) {
        Customer cust = new Customer();
        cust.setCustomername(postCustomer.getCustomername());
        cust.setCustomeraddress(postCustomer.getCustomeraddress());
        Customer savedCustomer = custservice.saveCustomer(cust);
        log.info("Customer saved successfully");
        return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Integer id, @RequestBody Customer customer) {
        customer.setCustomerid(id);
        Customer updatedCustomer = custservice.saveCustomer(customer);
        return new ResponseEntity<>(updatedCustomer, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable Integer id) {
        custservice.deleteCustomerById(id);
        log.info("Customer deleted successfully with ID: {}", id);
        return new ResponseEntity<>("Deleted successfully", HttpStatus.OK);
    }

    @GetMapping("/fetchpdf")
    public ResponseEntity<InputStreamResource> customerReport() {
        List<Customer> customers = custrepo.findAll();
        ByteArrayInputStream biss = PdfService.customerPDFReport(customers);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=customers.pdf");

        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(biss));
    }

    @GetMapping("/fetchexcel")
    public void generateExcelReport(HttpServletResponse response) throws IOException {
        response.setContentType("application/vnd.ms-excel");
        String headerKey = "Content-Disposition";
        String headerValue = "attachment;filename=customers.xls";
        response.setHeader(headerKey, headerValue);
        xlservice.generateExcel(response);
    }
}
