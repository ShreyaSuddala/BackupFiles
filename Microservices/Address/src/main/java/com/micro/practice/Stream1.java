package com.micro.practice;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Stream1 {
    public static void main(String[] args) {
        List<Integer> k = new ArrayList<>();
        k.add(10);
        k.add(11);
        k.add(13);
        k.add(16);
        k.add(9);
        k.add(18);

        List<Integer> f = k.stream().sorted(Comparator.reverseOrder()).skip(2).limit(1)
                .collect(Collectors.toList());

        System.out.println(f);
    }
}
