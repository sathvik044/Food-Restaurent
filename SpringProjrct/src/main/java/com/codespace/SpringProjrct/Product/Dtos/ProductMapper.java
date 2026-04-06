package com.codespace.SpringProjrct.Product.Dtos;
import com.codespace.SpringProjrct.Product.Entity.Product;
public class ProductMapper {
    //toEntity
    public static Product toEntity(ProductRequest request){
        return Product.builder()
                .name(request.getName())
                .price(request.getPrice())
                .build();
    }
    //toDto
    public static ProductResponse toDto(Product product){
        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .price(product.getPrice())
                .build();
    }
}
