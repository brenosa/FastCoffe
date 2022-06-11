import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'stock' })
export class Stock {
    @PrimaryGeneratedColumn()
    id: number
 
    @Column({ type: 'integer' })
    qtyAvailable: number;

    @Column({ type: 'date' })
    lastRestocking: Date;

    @Column({ type: 'date' })
    nextRestocking: Date;

    @OneToOne(() => Product)
    @JoinColumn()
    product: Product

    @Column()
    productId: number;
   
}