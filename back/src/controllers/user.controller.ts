import { Controller, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Post('login')
  login(@Req() request: Request): Promise<User> {
    return this.userService.login(request.body?.cpf, request.body?.password);
  }

  @Put()
  createUser(@Req() request: Request): Promise<boolean> {
    return this.userService.createUser(request.body);
  }
}