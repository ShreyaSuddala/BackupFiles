//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.customercrud.model;


import jakarta.validation.constraints.NotBlank;

public class PostCustomer {
    private @NotBlank(
            message = "Enter complete address"
    ) String customeraddress;

    private String customername;

    public PostCustomer() {
    }

   public @NotBlank(message = "enter full name") String getCustomername(){
        return this.customername;
   }

   public void setCustomername(@NotBlank(message = "enter full name") String customername){
        this.customername = customername;
   }

    public @NotBlank(
            message = "Enter complete address"
    ) String getCustomeraddress() {
        return this.customeraddress;
    }

    public void setCustomeraddress(@NotBlank(
            message = "Enter complete address"
    ) String customeraddress) {
        this.customeraddress = customeraddress;
    }

    @Override
    public String toString() {
        return "PostCustomer{" +
                "customeraddress='" + customeraddress + '\'' +
                ", customername='" + customername + '\'' +
                '}';
    }
}
