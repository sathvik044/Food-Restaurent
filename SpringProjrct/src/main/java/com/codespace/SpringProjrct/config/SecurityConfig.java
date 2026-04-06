package com.codespace.SpringProjrct.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

   @Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .csrf(csrf -> csrf.disable())
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/","/api/login","/api/register","/api/home").permitAll()
            .anyRequest().permitAll()
        )
        .formLogin(form -> form.permitAll())
        .httpBasic(httpBasic -> httpBasic.disable());

    return http.build();
}
}
