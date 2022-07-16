import { Injectable } from "@nestjs/common";
import { createQueryBuilder, getRepository } from "typeorm";
import { Order } from "../entities/order.entity";
import { OrderItem } from "../entities/orderItem.entity";

@Injectable()
export class OrderRepository {

    async getPendingOrders(): Promise<Order[]> {
        return await getRepository(Order).find({
            where: {
                status: "Pendente"
            }
        });
    }

    async save(order: Order): Promise<number> {
        try {
            const orderId = (await createQueryBuilder()
                .insert()
                .into(Order)
                .values(order)
                .execute()).identifiers[0]?.id;

            console.log('orderId', orderId)

            for await (const item of order.orderItems) {
                console.log('item', item)
                item.orderId = orderId;
                createQueryBuilder()
                    .insert()
                    .into(OrderItem)
                    .values(item)
                    .execute();
            }

            return orderId;
        } catch (error) {
            console.log('error', error)
            return 0;
        }
    }

    async update(order: Order): Promise<boolean> {
        try {
            await createQueryBuilder('Order')
                .update(order)
                .execute();
            return true;
        } catch (error) {
            console.log('error', error)
            return false;
        }
    }

}