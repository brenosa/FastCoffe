import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(@Req() request: Request): Promise<Product[]> {
    return this.productService.getAllProducts();
  }
}