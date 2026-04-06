package com.codespace.SpringProjrct.User.Service;
import com.codespace.SpringProjrct.User.dtos.UserResponse;
import com.codespace.SpringProjrct.User.dtos.UserRequest;
import java.util.List;
public interface UserService {
   UserResponse create(UserRequest dto);
   UserResponse getById(Long id);
   List<UserResponse> getAll();

}
