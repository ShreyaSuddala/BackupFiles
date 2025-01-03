package com.streams.Practice;

import java.sql.Array;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class CommonElements {
    public static void main(String[] args) {

      Integer[] arr1 = {2,3,4,5,6};
      Integer[] arr2 = {1,2,4,3,9};
      List<Integer> commonelements = Arrays.stream(arr1)
              .filter(Arrays.asList(arr2)::contains)
              .collect(Collectors.toList());

      System.out.println(commonelements);
    }
}
