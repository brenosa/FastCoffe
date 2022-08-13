import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderItem } from './orderItem.entity';

@Entity({ name: 'order' })
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    clientId: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    totalCost: number;

    @Column({ type: 'varchar', length: 300 })
    paymentMethod: string;

    @Column()
    orderDate: Date;

    @Column({ type: 'varchar', length: 300 })
    status: string;

    @OneToMany(() => OrderItem, orderItem => orderItem.order)
    orderItems: OrderItem[]        
}