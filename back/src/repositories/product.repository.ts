import { Injectable } from "@nestjs/common";
import { getRepository } from "typeorm";
import { Product } from "../entities/product.entity";


@Injectable()
export class ProductRepository {
    async getAllProducts(): Promise<Product[]> {
        const products = await getRepository(Product).find();
        return products;
    }


}