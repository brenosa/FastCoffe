import { Injectable } from "@nestjs/common";
import { createQueryBuilder } from "typeorm";
import { Cost } from "../entities/cost.entity";

@Injectable()
export class MenuRepository {
    getMenuItems(): Promise<any[]> {
        return createQueryBuilder("Menu")
            .select([
                "Product.id AS id",
                "Product.name AS name",
                "Product.description AS description",
                "Product.imageLocation AS imageLocation",
                "Product.category AS category",
                "Cost.cost AS cost"
            ])
            .innerJoin("Menu.product", "Product")
            .innerJoin(Cost, "Cost", "Product.id = Cost.productId")
            .getRawMany();
    }

    /* async addProduct(productId: number): Promise<Menu> { } */


}