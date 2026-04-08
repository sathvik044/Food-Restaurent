package com.codespace.SpringProjrct.cart.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codespace.SpringProjrct.cart.Entity.Cart;
import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Long> {
    public Cart findByUserIdAndMenu_Id(long userId, long menuId);
    public List<Cart> findByUserId(long userId);
    public void deleteByUserId(long userId);
}
