package com.codespace.SpringProjrct.Product.Controller;

//import com.codespace.SpringProjrct.Model.Product;
import com.codespace.SpringProjrct.Product.Service.ProductService;  
import com.codespace.SpringProjrct.Product.Dtos.ProductRequest;
import com.codespace.SpringProjrct.Product.Dtos.ProductResponse; 
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // GET ALL
    @GetMapping
    public List<ProductResponse> getAll(){
        return productService.findAll();
    }

    // CREATE
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductResponse create(@RequestBody ProductRequest request){
        return productService.save(request);
    }

    // UPDATE
    @PutMapping("/{id}")
    public ProductResponse update(@PathVariable Long id, @RequestBody ProductRequest request) {
        return productService.update(id, request);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        productService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
