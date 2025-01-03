package com.streams.Practice;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class FindLongestString {
    public static void main(String[] args) {

            List<String> ls = Arrays.asList("hello","hi","bye","good","b");

            String longestString  = ls.stream()
                    .reduce((str1,str2)->str1.length() > str2.length() ? str1:str2)
                            .orElse(null);
            System.out.println("Longest String: "+longestString);

            List<Integer> lengthOfString = ls.stream()
                    .map(n->n.length())
                    .collect(Collectors.toUnmodifiableList());

            System.out.println(lengthOfString);
        }






}
