package com.example.crontask;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class SchedulingTask {
//    private static final Logger log = LoggerFactory.getLogger(SchedulingTask.class);
//
//    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
//
//
//    @Scheduled(fixedDelay = 10000)
//    public void reportTime(){
//        log.info("The time is now {}", dateFormat.format(new Date()));
//    }

    @Scheduled(fixedDelay = 1500)
    public void Time(){
        System.out.println("hello");
    }
}
