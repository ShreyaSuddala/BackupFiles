package com.streams.Practice;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Order {
    public static void main(String[] args) {
        List<Orderref> orders = Arrays.asList(
                new Orderref("1", 250.0, "COMPLETED"),
                new Orderref("2", 150.0, "PENDING"),
                new Orderref("3", 450.0, "COMPLETED"),
                new Orderref("4", 75.0, "PENDING"),
                new Orderref("5", 300.0, "COMPLETED")
        );

        List<Orderref> completedorders = orders.stream().filter(n->n.getStatus()=="COMPLETED")
                .collect(Collectors.toUnmodifiableList());

        System.out.println("completedOrders: "+completedorders);


        double AmountOfCompletedOrders = orders.stream()
                .filter(i->i.getStatus()=="COMPLETED")
                .mapToDouble(Orderref::getPrice)
                .sum();
        System.out.println("TotalAmountOfCompletedOrders: "+AmountOfCompletedOrders);


    }
}
