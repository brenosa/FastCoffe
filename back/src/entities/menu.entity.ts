import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from 'typeorm';
import { Cost } from './cost.entity';
import { Product } from './product.entity';
import { Stock } from './stock.entity';

@Entity({ name: 'menu' })
export class Menu {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    productId: number;

    @OneToOne(() => Product)
    @JoinColumn()
    product: Product
    
/*     @OneToOne(() => Cost)
    @JoinColumn()
    cost: Cost

    @OneToOne(() => Stock)
    @JoinColumn()
    stock: Stock */
   
}