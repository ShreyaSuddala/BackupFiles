package com.streams.Practice;

import java.util.Arrays;

public class Solve {
    public static void main(String[] args) {
        String[] array = {"A", "B", "C"};
        Arrays.stream(array).forEach(System.out::println);
    }
}
