package com.codespace.SpringProjrct.Login.Service;

import org.springframework.stereotype.Service;
import com.codespace.SpringProjrct.Login.Dtos.LoginResponse;
import com.codespace.SpringProjrct.User.Entity.User;
import com.codespace.SpringProjrct.User.Repository.UserRepository;
import com.codespace.SpringProjrct.Login.Dtos.LoginMapper;
import org.springframework.beans.factory.annotation.Autowired;


@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    public LoginResponse login(String email, String password) {

    // ✅ Step 1: Fetch from DB
    User user = userRepository.findByEmail(email);

    if (user == null) {
        throw new RuntimeException("User not found");
    }

    // ✅ Step 2: Check password
    if (!user.getPassword().equals(password)) {
        throw new RuntimeException("Invalid password");
    }

    // ✅ Step 3: Convert to DTO
    LoginResponse response = LoginMapper.toDto(user);
    response.setMessage("Login successful");

    return response;
}
}