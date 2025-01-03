package com.streams;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.stream.Stream;

public class ReverseOfastring {
    public static void main(String[] args) {

        String input = "this is shreya";

        String reversed = new StringBuilder(input).reverse().toString();

        System.out.println(reversed);



    }
}
