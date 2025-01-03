package com.streams.Practice;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class RemoveDup {
    public static void main(String[] args) {

        List<Integer> k = Arrays.asList(1,2,3,3,4,4,5);

        List<Integer> res = k.stream().distinct().collect(Collectors.toList());

        System.out.println(res);
    }



}
