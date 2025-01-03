package com.streams;

import java.util.Arrays;
import java.util.List;

public class MissingElement {

    public static void main(String[] args) {

        List<Integer> numbers = Arrays.asList(1, 2, 3,  5, 6, 7, 8, 9, 10);
        int size = numbers.size();
        int expectedSum = (size + 1) * (size + 2) / 2;
        int actualSum = numbers.stream().mapToInt(Integer::intValue).sum();
        int missingNum = expectedSum-actualSum;
        System.out.println(missingNum);




    }
}
