package com.sanduni.rentcloud.vehicleservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EntityScan(basePackages = "com.sanduni.rentcloud.model.vehicle")
@EnableEurekaClient

public class VehicleServiceApplication {
	public static void main(String[] args) {
		SpringApplication.run(VehicleServiceApplication.class, args);
	}
}