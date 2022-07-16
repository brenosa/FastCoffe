import { Injectable } from "@nestjs/common";
import { createQueryBuilder, getRepository } from "typeorm";
import { User } from "../entities/user.entity";


@Injectable()
export class UserRepository {
    async login(cpf: string, password: string): Promise<User> {
        return await getRepository(User).findOne({
            where: {
                cpf,
                password
            },
        });
    }

    async save(user: User): Promise<boolean> {
        try {
            await createQueryBuilder()
                .insert()
                .into(User)
                .values(user)
                .execute();
            return true;
        } catch (error) {
            console.log('error', error)
            return false;
        }

    }
}