package com.productService.product.repository;

import com.productService.product.modal.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

public interface ProductRepository extends JpaRepository<Product, Long> {



}
