package com.codespace.SpringProjrct.User.Controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.codespace.SpringProjrct.User.dtos.UserRequest;
import com.codespace.SpringProjrct.User.dtos.UserResponse;
import com.codespace.SpringProjrct.User.Service.UserService;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // ✅ GET ALL USERS
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<UserResponse> getAll() {
        return userService.getAll();
    }

    // ✅ GET USER BY ID
    @GetMapping("/{id}")
    public UserResponse getById(@PathVariable Long id) {
        return userService.getById(id);
    }

    // ✅ CREATE USER
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse create(@RequestBody UserRequest request) {
        return userService.create(request);
    }
}