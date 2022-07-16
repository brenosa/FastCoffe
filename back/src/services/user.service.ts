import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    login(cpf: string, password: string): Promise<User> {
        return this.userRepository.login(cpf, password);
    }

    createUser(user: User): Promise<boolean> {
        return this.userRepository.save(user);
    }
}
