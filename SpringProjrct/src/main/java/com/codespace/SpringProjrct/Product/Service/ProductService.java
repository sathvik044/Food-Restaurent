package com.codespace.SpringProjrct.Product.Service;

import com.codespace.SpringProjrct.Product.Dtos.ProductRequest;
import com.codespace.SpringProjrct.Product.Dtos.ProductResponse;
import java.util.List;
public interface ProductService {
    ProductResponse save(ProductRequest request);
    List<ProductResponse> findAll();
    ProductResponse update(Long id, ProductRequest request);
    void deleteById(Long id);
}
