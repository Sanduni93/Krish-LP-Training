package com.sanduni.rentcloud.rentprocesstask.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

public class RentProcessTaskRunner implements CommandLineRunner {

    @Autowired
    RentProcessService rentProcessService;

    @Override
    public void run(String... args) throws Exception {

        if(args.length>0) {

            System.out.println("Task is running with arguments");

            if (rentProcessService.validateDL(args[0])) {
                System.out.println("Valid driving license");
            } else {
                System.out.println("Invalid driving license");
            }
        } else {
            System.out.println("Task is running without arguments");
        }

    }
}
