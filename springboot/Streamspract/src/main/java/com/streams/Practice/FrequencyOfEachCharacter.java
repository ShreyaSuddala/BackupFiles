package com.streams.Practice;

import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class FrequencyOfEachCharacter {
    public static void main(String[] args) {

      String s = "hellohello";

    Map<Character,Long> res = s.chars()
            .mapToObj(c->(char)c)
            .collect(Collectors.groupingBy(c->c,Collectors.counting()));

    res.forEach((key,value)->System.out.println(key+" "+value));

    }
}
