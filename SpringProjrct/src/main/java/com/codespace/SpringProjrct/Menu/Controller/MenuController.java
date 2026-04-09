package com.codespace.SpringProjrct.Menu.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.codespace.SpringProjrct.Menu.Entity.Menu;
import com.codespace.SpringProjrct.Menu.Service.MenuService;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
public class MenuController {

    @Autowired
    private MenuService menuService;

    // 🔥 Dynamic endpoint
    @GetMapping("/{category}")
    public List<Menu> getMenuByCategory(@PathVariable String category) {
        return menuService.getMenuByCategory(category);
    }
}