package com.codespace.SpringProjrct.Login.Dtos;
import com.codespace.SpringProjrct.User.Entity.User;
import com.codespace.SpringProjrct.User.dtos.UserRequest;
public class LoginMapper {
    //toEntity
    public static User toEntity(UserRequest request) {
        return User.builder()
                .name(request.getName())
                .age(request.getAge())
                .email(request.getEmail())
                .password(request.getPassword())
                .build();
    }
    //toDto
    public static LoginResponse toDto(User user) {
        return LoginResponse.builder()
                .name(user.getName())
                .age(user.getAge())
                .email(user.getEmail())
                .message("Login successful")
                .build();
    }
    public static User toEntity(String email, String password) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'toEntity'");
    }
}
