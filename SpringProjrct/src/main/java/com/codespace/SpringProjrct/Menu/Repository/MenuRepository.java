package com.codespace.SpringProjrct.Menu.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codespace.SpringProjrct.Menu.Entity.Menu;

import java.util.List;

public interface MenuRepository extends JpaRepository<Menu, Integer> {
    List<Menu> findByType(String type);
}
