package com.codespace.SpringProjrct.cart.Entity;

import com.codespace.SpringProjrct.Menu.Entity.Menu;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.*;

@Entity
@Data
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private int quantity;

    private long userId;

    private double priceAtTime; 

    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "menu_id")
    private Menu menu;
}