import { Injectable } from "@nestjs/common";
import { createQueryBuilder, getRepository } from "typeorm";
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
                "Menu.category AS category",
                "Cost.cost AS cost"
            ])
            .innerJoin("Menu.product", "Product")
            .leftJoin(Cost, "Cost", "Product.id = Cost.productId")
            .getRawMany();
    }

    getMenu(): Promise<any[]> {
        return createQueryBuilder("Menu")
            .innerJoinAndSelect("Menu.product", "product")           
            .getMany();
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

    async delete(menuId: number): Promise<boolean> {
        try {
            await createQueryBuilder('Menu')
                .delete()
                .where({
                    id: menuId
                })
                .execute();
            return true;
        } catch (error) {
            console.log('error', error)
            return false;
        }
    }


}