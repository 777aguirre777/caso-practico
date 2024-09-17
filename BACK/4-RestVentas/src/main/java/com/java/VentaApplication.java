package com.java;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableDiscoveryClient
@EntityScan({"com.java.model.entities"})
@EnableFeignClients
@SpringBootApplication
public class VentaApplication {

    public static void main(String[] args) {

        SpringApplication.run(VentaApplication.class, args);
    }

}
