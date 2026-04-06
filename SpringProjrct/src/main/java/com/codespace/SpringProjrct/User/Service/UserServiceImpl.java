package com.codespace.SpringProjrct.User.Service;
import org.springframework.stereotype.Service;

import com.codespace.SpringProjrct.User.dtos.UserResponse;
import com.codespace.SpringProjrct.User.dtos.UserMapper;
import com.codespace.SpringProjrct.User.dtos.UserRequest;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import com.codespace.SpringProjrct.User.Repository.UserRepository;
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserResponse create(UserRequest dto) {
        return UserMapper.toDto(userRepository.save(UserMapper.toEntity(dto)));
    }
    @Override
    public UserResponse getById(Long id) {
        return UserMapper.toDto(userRepository.findById(id).orElse(null));
    }
    @Override
    public List<UserResponse> getAll() {
        return userRepository.findAll().stream().map(UserMapper::toDto).collect(Collectors.toList());
    }
}
