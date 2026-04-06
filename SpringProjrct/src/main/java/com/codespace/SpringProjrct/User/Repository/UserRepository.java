package com.codespace.SpringProjrct.User.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.codespace.SpringProjrct.User.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
 User findByEmail(String email);
    boolean existsByEmail(String email);
    
}
