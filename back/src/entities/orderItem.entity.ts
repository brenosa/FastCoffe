import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}