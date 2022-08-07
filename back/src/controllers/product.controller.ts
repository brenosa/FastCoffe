import { Controller, Delete, Get, Param, Patch, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Put()
  createProduct(@Req() request: Request): Promise<boolean> {
    return this.productService.createProduct(request.body);
  }

  @Patch()
  updateProduct(@Req() request: Request): Promise<boolean> {
    return this.productService.updateProduct(request.body);
  }

  @Delete('/:productId')
  deleteProduct(@Param('productId') productId): Promise<boolean> {
    return this.productService.deleteProduct(productId);
  }
}