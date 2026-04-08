package com.codespace.SpringProjrct.cart.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.codespace.SpringProjrct.cart.Entity.Cart;
import com.codespace.SpringProjrct.cart.Service.CartService;
import org.springframework.http.ResponseEntity;
import java.util.List;
@RestController
@RequestMapping("/api/cart")
@CrossOrigin
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping
    public ResponseEntity<Cart> addToCart(
            @RequestParam long userId,
            @RequestParam long menuId,
            @RequestParam int quantity) {

        return ResponseEntity.ok(cartService.addToCart(userId, menuId, quantity));
    }

    @PutMapping("/{cartId}")
    public ResponseEntity<Cart> updateCart(
            @PathVariable long cartId,
            @RequestParam int quantity) {

        return ResponseEntity.ok(cartService.updateCart(cartId, quantity));
    }

    @DeleteMapping("/{cartId}")
    public ResponseEntity<String> deleteCart(@PathVariable long cartId) {
        cartService.deleteCart(cartId);
        return ResponseEntity.ok("Deleted successfully");
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Cart>> getCartByUserId(@PathVariable long userId) {
        return ResponseEntity.ok(cartService.getCartByUserId(userId));
    }

    @DeleteMapping("/clear/{userId}")
    public ResponseEntity<String> clearCart(@PathVariable long userId) {
        cartService.clearCart(userId);
        return ResponseEntity.ok("Cart cleared");
    }
}