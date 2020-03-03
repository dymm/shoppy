package com.shoppy.shoppy.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.shoppy.shoppy.api.item.ItemRepository;

@SpringBootApplication
public class ShoppyApiApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(ShoppyApiApplication.class, args);
	}

}
