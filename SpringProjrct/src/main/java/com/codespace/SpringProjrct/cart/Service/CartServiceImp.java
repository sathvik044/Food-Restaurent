package com.codespace.SpringProjrct.cart.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.codespace.SpringProjrct.cart.Repository.CartRepository;
import com.codespace.SpringProjrct.Menu.Entity.Menu;
import com.codespace.SpringProjrct.cart.Entity.Cart;
import java.util.List;

import org.springframework.stereotype.Service;
@Service
public class CartServiceImp implements CartService {
    @Autowired
    private CartRepository cartRepository;

 @Override
public Cart addToCart(long userId, long menuId, int quantity) {

    // Check if item already exists
    Cart existingCart = cartRepository.findByUserIdAndMenu_Id(userId, menuId);

    if (existingCart != null) {
        // Increase quantity
        existingCart.setQuantity(existingCart.getQuantity() + quantity);
        return cartRepository.save(existingCart);
    }

    // Create new cart item
    Cart cart = new Cart();
    cart.setUserId(userId);
    cart.setQuantity(quantity);

    // 🔥 You must fetch Menu from DB (IMPORTANT)
    Menu menu = new Menu();
    menu.setId((int) menuId); // shortcut (better: use MenuRepository)

    cart.setMenu(menu);

    return cartRepository.save(cart);
}

   @Override
public Cart updateCart(long cartId, int quantity) {

    Cart cart = cartRepository.findById(cartId)
            .orElseThrow(() -> new RuntimeException("Cart not found"));

    cart.setQuantity(quantity);

    return cartRepository.save(cart);
}

  @Override
public void deleteCart(long cartId) {
    cartRepository.deleteById(cartId);
}

  @Override
public List<Cart> getCartByUserId(long userId) {
    return cartRepository.findByUserId(userId);
}

   @Override
public void clearCart(long userId) {
    cartRepository.deleteByUserId(userId);
}
    
}
