import { Injectable } from "@nestjs/common";
import { createQueryBuilder, getRepository } from "typeorm";
import { Product } from "../entities/product.entity";


@Injectable()
export class ProductRepository {
    async getAllProducts(): Promise<Product[]> {
        return await getRepository(Product).find();
    }

    async save(product: Product): Promise<boolean> {
        try {
            await createQueryBuilder()
                .insert()
                .into(Product)
                .values(product)
                .execute();
            return true;
        } catch (error) {
            console.log('error', error)
            return false;
        }
    }

    async update(product: Product): Promise<boolean> {
        try {
            await createQueryBuilder('Product')
                .update(product)
                .where({
                    id: product.id
                })
                .execute();
            return true;
        } catch (error) {
            console.log('error', error)
            return false;
        }
    }

    async delete(productId: number): Promise<boolean> {
        try {
            await createQueryBuilder('Product')
                .delete()
                .where({
                    id: productId
                })
                .execute();
            return true;
        } catch (error) {
            console.log('error', error)
            return false;
        }
    }
}