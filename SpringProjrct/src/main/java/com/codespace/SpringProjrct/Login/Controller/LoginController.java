package com.codespace.SpringProjrct.Login.Controller;

import com.codespace.SpringProjrct.Login.Service.LoginService;
import com.codespace.SpringProjrct.User.Entity.User;
import com.codespace.SpringProjrct.User.Repository.UserRepository;
import com.codespace.SpringProjrct.Login.Dtos.LoginRequest;
import com.codespace.SpringProjrct.Login.Dtos.LoginResponse;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private LoginService loginService;
   @Autowired   
   private UserRepository userRepository;

    // ✅ LOGIN
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return loginService.login(request.getEmail(), request.getPassword());
    }

    // ✅ REGISTER
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {

        // check email exists
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email already exists ❌");
        }

        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }
}