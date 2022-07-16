import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'menu' })
export class Menu {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    productId: number;

    @OneToOne(() => Product)
    @JoinColumn()
    product: Product 
   
}