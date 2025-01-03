package com.streams.Practice;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class SortingtheLengthOfArrays {
    public static void main(String[] args) {
        List<String> k = Arrays.asList("how","whhy","es","button");

        List<String> res = k.stream()
                .sorted((n,n1)->n.length()-n1.length())
                .collect(Collectors.toList());

        System.out.println(res);

        List<String> res1 = k.stream()
                .sorted((m,m1)-> Integer.compare(m.length(),m1.length()))
                .collect(Collectors.toUnmodifiableList());
        System.out.println(res1);
    }
}
