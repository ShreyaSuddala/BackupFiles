package com.streams;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class ListEvenOdd {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        List<Integer> res = numbers.stream()
                .filter(n->n%2 !=0)
                .map(i->(i+i))
                .collect(Collectors.toList());

        System.out.println(res);

        List<Integer> junaidoutput = numbers.stream()
                .filter(o->o%2!=0)
                .map(y->(y*3))
                .filter(x->x!=9)
                .collect(Collectors.toList());

        System.out.println(junaidoutput);


        List<Integer> j = Arrays.asList(3,15,21,27,35)
;
        System.out.println(j);


    }


}
