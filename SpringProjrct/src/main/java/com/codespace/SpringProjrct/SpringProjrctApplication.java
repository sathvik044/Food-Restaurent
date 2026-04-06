package com.codespace.SpringProjrct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;




@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.codespace.SpringProjrct")
public class SpringProjrctApplication {

	public static void main(String[] args) {
 
       ApplicationContext context =SpringApplication.run(SpringProjrctApplication.class, args);       
		

	}	

}
