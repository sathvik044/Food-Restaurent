package com.codespace.SpringProjrct.Login.Dtos;
import lombok.*;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {
    private Long id;
    private String name;
    private int age;
    private String email;
    private String message;
    private String token;
}

