package com.codespace.SpringProjrct.Product.Service;
import com.codespace.SpringProjrct.Product.Entity.Product;
import com.codespace.SpringProjrct.Product.Dtos.ProductRequest;
import com.codespace.SpringProjrct.Product.Dtos.ProductResponse;
import com.codespace.SpringProjrct.Product.Dtos.ProductMapper;
import com.codespace.SpringProjrct.Product.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service

public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository repo;

     public ProductResponse save(ProductRequest request){
        Product product = ProductMapper.toEntity(request);
        Product saved = repo.save(product);
        return ProductMapper.toDto(saved);
     }
   public List<ProductResponse> findAll(){
        return repo.findAll().stream()
                .map(ProductMapper::toDto)
                .collect(Collectors.toList());
    }
    public ProductResponse update(Long id, ProductRequest request){
        Product product = repo.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        product.setName(request.getName());
        product.setPrice(request.getPrice());
        Product saved = repo.save(product);
        return ProductMapper.toDto(saved);
    }
   public void deleteById(Long id){
        repo.deleteById(id);
    }   



    
}

