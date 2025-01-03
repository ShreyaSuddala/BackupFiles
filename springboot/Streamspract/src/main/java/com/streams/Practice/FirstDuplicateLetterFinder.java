package com.streams.Practice;

import java.util.*;
import java.util.stream.Collectors;

public class FirstDuplicateLetterFinder {
    public static void main(String[] args) {
        String input = "javaisawesome";


        Character firstDuplicate = input.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.toMap(
                        c -> c,
                        c -> 1,
                        Integer::sum))
                .entrySet().stream()
                .filter(entry -> entry.getValue() > 1)
                .map(Map.Entry::getKey)
                .findFirst()
                .orElse(null);

        if (firstDuplicate != null) {
            System.out.println("First duplicate letter: " + firstDuplicate);
        } else {
            System.out.println("No duplicate letters found.");
        }
    }
}
