import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 50 })
    gender: string;

    @Column({ type: 'enum', enumName: 'user_role_enum', enum: ["client", "employee"], default: "employee" })
    userRole: string;

    @Column({ type: 'varchar', length: 100 })
    email: string;

    @Column({ type: 'varchar', length: 50 })
    phone: string;

    @Column({ type: 'varchar', length: 50, unique: true })
    cpf: string;

    @Column({ type: 'varchar', length: 20 })
    password: string;

    @Column({ type: 'varchar', length: 50 })
    position: string;

}