package com.merge.service;

import com.merge.entity.Customer;
import com.merge.repository.CustRepo;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.stereotype.Service;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Service
public class ExcelService {

    private final CustRepo custrepo;

    public ExcelService(CustRepo custrepo) {
        this.custrepo = custrepo;
    }

    public void generateExcel(HttpServletResponse response) throws IOException {
        List<Customer> customers = custrepo.findAll();

        try (HSSFWorkbook workbook = new HSSFWorkbook()) {
            HSSFSheet sheet = workbook.createSheet("Customers");
            HSSFRow row = sheet.createRow(0);

            row.createCell(0).setCellValue("ID");
            row.createCell(1).setCellValue("Customer Name");
            row.createCell(2).setCellValue("Customer Address");

            int dataRowIndex = 1;

            for (Customer customer : customers) {
                HSSFRow dataRow = sheet.createRow(dataRowIndex);
                dataRow.createCell(0).setCellValue(customer.getCustomerid());
                dataRow.createCell(1).setCellValue(customer.getCustomername());
                dataRow.createCell(2).setCellValue(customer.getCustomeraddress());
                dataRowIndex++;
            }

            try (ServletOutputStream outputStream = response.getOutputStream()) {
                workbook.write(outputStream);
            }
        }
    }
}
