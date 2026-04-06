package com.codespace.SpringProjrct.Menu.Service;

import java.util.List;

import com.codespace.SpringProjrct.Menu.Entity.Menu;




public interface MenuService {

    
    // 🔥 Get items by category (burger, pizza, food)
    public List<Menu> getMenuByCategory(String type);
    
   
}   