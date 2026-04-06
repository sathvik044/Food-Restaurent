package com.codespace.SpringProjrct.Product.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.codespace.SpringProjrct.Product.Entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    
}
