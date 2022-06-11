import { Injectable } from "@nestjs/common";
import { getRepository } from "typeorm";
import { Product } from "../entities/product.entity";


@Injectable()
export class ProductRepository {
    async getAllProducts(): Promise<Product[]> {
        return await getRepository(Product).find();
    }

    /* async addProduct(product: Product): Promise<Product> { } */
}