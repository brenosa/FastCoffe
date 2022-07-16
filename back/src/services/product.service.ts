import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { ProductRepository } from '../repositories/product.repository';

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) { }
   
    getAllProducts(): Promise<Product[]> {
        return this.productRepository.getAllProducts();
    }

    createProduct(product: Product): Promise<boolean> {
        return this.productRepository.save(product);
    }

    updateProduct(product: Product): Promise<boolean> {
        return this.productRepository.update(product);
    }

    deleteProduct(product: Product): Promise<boolean> {
        return this.productRepository.delete(product);
    }
}
