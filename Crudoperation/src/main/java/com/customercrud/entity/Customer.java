//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.customercrud.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(
        name = "Customer"
)
public class Customer {
    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )
    private int customerid;
    private String customername;
    private String customeraddress;

    public Customer() {
    }

    public Customer(int customerid, String customername, String customeraddress) {
        this.customerid = customerid;
        this.customername = customername;
        this.customeraddress = customeraddress;
    }

    public int getCustomerid() {
        return this.customerid;
    }

    public void setCustomerid(int customerid) {
        this.customerid = customerid;
    }

    public String getCustomername() {
        return this.customername;
    }

    public void setCustomername(String customername) {
        this.customername = customername;
    }

    public String getCustomeraddress() {
        return this.customeraddress;
    }

    public void setCustomeraddress(String customeraddress) {
        this.customeraddress = customeraddress;
    }

    public String toString() {
        return "Customer{customerid=" + this.customerid + ", customername='" + this.customername + "', customeraddress='" + this.customeraddress + "'}";
    }

    public void setAddress(String customeraddress) {
        this.customeraddress = customeraddress;
    }
}
