import { Controller, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { OrderService } from '../services/order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Put()
  createOrder(@Req() request: Request): Promise<number> {
    return this.orderService.createOrder(request.body?.order);
  }
}