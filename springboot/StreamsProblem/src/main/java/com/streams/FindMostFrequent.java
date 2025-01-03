package com.streams;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class FindMostFrequent {
    public static void main(String[] args) {
        List<Integer> freq = Arrays.asList(1,2,3,1,3,6,8);
        Integer mostFrequent = freq.stream()
                .collect(Collectors.groupingBy(e -> e, Collectors.counting()))
                .entrySet()
                .stream()
                .max(Map.Entry.comparingByValue())
                .map(Map.Entry::getKey)
                .orElse(null);

        System.out.println("Most frequent element: " + mostFrequent);


    }
}
