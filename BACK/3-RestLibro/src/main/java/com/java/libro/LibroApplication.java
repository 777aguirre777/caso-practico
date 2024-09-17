package com.java.libro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@EntityScan({"com.java.libro.model.entities"})
@SpringBootApplication
public class LibroApplication {

	public static void main(String[] args) {

		SpringApplication.run(LibroApplication.class, args);
	}

}
