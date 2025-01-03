package com.streams.Practice;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class CapitalizeFirstLetter {

    public static void main(String[] args) {
        List<String> k = new ArrayList<>();
        k.add("john");
        k.add("don");
        k.add("ran");
        k.add("phn");
      List<String> result = k.stream().map(n1->n1.substring(0,1).toUpperCase() + n1.substring(1)).collect(Collectors.toUnmodifiableList());
      List<String> res = k.stream()
                      .map(n->n.substring(0,1) + n.substring(1,2).toUpperCase() + n.substring(2))
                              .collect(Collectors.toList());
      System.out.println(res);
        System.out.println(result);
    }
}
