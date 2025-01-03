package com.streams.Practice;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class SumOfNumbers {
    public static void main(String[] args) {
        List<Integer> k = Arrays.asList(12,5,4,6,7);
        List<Integer> dup = Arrays.asList(2,2,2,4,5,6,6,3,1,1,7);
//        print the sum

        Integer n = k.stream().mapToInt(Integer::intValue).sum();
        System.out.println("Sum of all numbers : "+n);

        Integer sum = k.stream().reduce((a,b)->a+b).get();
        System.out.println("Sum of all numbers : "+sum);

//        print the average value

        Double avg = k.stream().mapToInt(Integer::intValue).average().orElse(0);
        System.out.println("Average of all numbers : "+avg);

//          print the square

    List<Integer> sq = k.stream().map(i->i*i).collect(Collectors.toList());
    System.out.println("Square of all numbers : "+sq);

//    print even and odd

        List<Integer> even = k.stream().filter(q->q%2==0).collect(Collectors.toList());
        List<Integer> odd = k.stream().filter(o->o%2!=0).collect(Collectors.toList());

        System.out.println("Even numbers: "+even);
        System.out.println("Odd numbers: "+odd);

//        starts with prefix 2
        List<Integer> start2 = k.stream().map(e->String.valueOf(e))
                .filter(e->e.startsWith("2"))
                .map(Integer::valueOf).collect(Collectors.toUnmodifiableList());

        if(start2.isEmpty()){
            System.out.println("No value startswith 2");
        }
        else {
            System.out.println("Numbers starts with: "+start2);
        }

//        print duplicate

        List<Integer> duplicates = dup.stream()
                .collect(Collectors.groupingBy(e -> e, Collectors.counting()))
                .entrySet()
                .stream()
                .filter(e -> e.getValue() > 1)
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());
        System.out.println(duplicates);

//      find max and min

        Integer maxnum = k.stream().max(Integer::compareTo).get();
        System.out.println("maximum number: "+maxnum);

        Integer minnum = k.stream().min(Integer::compareTo).get();
        System.out.println("maximum number: "+minnum);

    }



}
