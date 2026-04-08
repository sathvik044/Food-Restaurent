package com.codespace.SpringProjrct.cart.Service;

import com.codespace.SpringProjrct.cart.Entity.Cart;
import java.util.List;



public interface CartService {

    Cart addToCart(long userId, long menuId, int quantity);

    Cart updateCart(long cartId, int quantity);

    void deleteCart(long cartId);

    List<Cart> getCartByUserId(long userId);

    void clearCart(long userId);
}