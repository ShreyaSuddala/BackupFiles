package com.streams.Practice;

public class Orderref {
    public String OrderId;
    public  Double price;
    public String status;

    public Orderref(String orderId, Double price, String status) {
        OrderId = orderId;
        this.price = price;
        this.status = status;
    }

    public String getOrderId() {
        return OrderId;
    }

    public void setOrderId(String orderId) {
        OrderId = orderId;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Orderref{" +
                "OrderId='" + OrderId + '\'' +
                ", price=" + price +
                ", status='" + status + '\'' +
                '}';
    }
}
