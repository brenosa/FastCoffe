import { Injectable } from "@nestjs/common";
import { createQueryBuilder } from "typeorm";
import { Order } from "../entities/order.entity";
import { OrderItem } from "../entities/orderItem.entity";

@Injectable()
export class OrderRepository {
    async save(order: Order): Promise<number> {
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
    }

}