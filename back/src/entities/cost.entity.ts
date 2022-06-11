import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'cost' })
export class Cost {
    @PrimaryGeneratedColumn()
    id: number
 
    @Column({ type: 'decimal' })
    cost: number;

    @Column({ type: 'decimal' })
    discount: number;

    @Column()
    productId: number;

    @OneToOne(() => Product)
    @JoinColumn()
    product: Product   
   
}