package com.codespace.SpringProjrct.Login.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.codespace.SpringProjrct.User.Entity.User;

public interface LoginRepository extends JpaRepository<User, Long> {
    
    
}
