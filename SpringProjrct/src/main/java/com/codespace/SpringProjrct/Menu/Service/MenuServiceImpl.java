package com.codespace.SpringProjrct.Menu.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codespace.SpringProjrct.Menu.Entity.Menu;
import com.codespace.SpringProjrct.Menu.Repository.MenuRepository;
@Service
public class MenuServiceImpl implements MenuService{
    @Autowired
    private MenuRepository menuRepository;
    @Override
    public List<Menu> getMenuByCategory(String type) {
        return menuRepository.findByType(type);
    }
    
}
