package com.codespace.SpringProjrct.Login.Service;

import org.springframework.stereotype.Service;
import com.codespace.SpringProjrct.Login.Dtos.LoginResponse;
import com.codespace.SpringProjrct.User.Entity.User;
import com.codespace.SpringProjrct.User.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.codespace.SpringProjrct.config.JwtUtil;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    public LoginResponse login(String email, String password) {

        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new RuntimeException("User not found ❌");
        }

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password ❌");
        }

        // ✅ GENERATE TOKEN
        String token = jwtUtil.generateToken(user.getEmail());

        return new LoginResponse(user.getId(), user.getName(), user.getAge(), user.getEmail(), "Login successful", token);
    }
}