import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { ProductRepository } from '../repositories/product.repository';

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) { }
    getAllProducts(): Promise<Product[]> {
        return this.productRepository.getAllProducts();
    }
}
