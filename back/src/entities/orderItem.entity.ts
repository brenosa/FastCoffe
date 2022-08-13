import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';

@Entity({ name: 'orderItem' })
export class OrderItem {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    productId: number;

    @Column()
    orderId: number;

    @Column()
    quantity: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    totalCost: number;

    @OneToOne(() => Product)
    @JoinColumn()
    product: Product 

    @ManyToOne(() => Order, order => order.orderItems)
    order: Order;   
}