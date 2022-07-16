import { Injectable } from "@nestjs/common";
import { createQueryBuilder } from "typeorm";
import { Cost } from "../entities/cost.entity";
import { Menu } from "../entities/menu.entity";

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

    async save(menu: Menu): Promise<boolean> {
        try {
            await createQueryBuilder()
                .insert()
                .into(Menu)
                .values(menu)
                .execute();
            return true;
        } catch (error) {
            console.log('error', error)
            return false;
        }
    }

    async update(menu: Menu): Promise<boolean> {
        try {
            await createQueryBuilder('Menu')
                .update(menu)
                .execute();
            return true;
        } catch (error) {
            console.log('error', error)
            return false;
        }
    }

    async delete(menu: Menu): Promise<boolean> {
        try {
            await createQueryBuilder('Menu')
                .delete()
                .where({
                    id: menu.id
                })
                .execute();
            return true;
        } catch (error) {
            console.log('error', error)
            return false;
        }
    }


}