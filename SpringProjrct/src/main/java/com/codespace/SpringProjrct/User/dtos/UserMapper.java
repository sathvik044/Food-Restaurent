package com.codespace.SpringProjrct.User.dtos;
import com.codespace.SpringProjrct.User.Entity.User;
public class UserMapper {
    //toEntity
    //todto
    public static User toEntity(UserRequest request){
        return User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword())
                .age(request.getAge())
                .build();
    }
    public static UserResponse toDto(User user){
        return UserResponse.builder()
                .name(user.getName())
                .email(user.getEmail())
                .age(user.getAge())
                .build();
    }
}
