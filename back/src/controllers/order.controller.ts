import { Controller, Get, Patch, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { Order } from '../entities/order.entity';
import { OrderService } from '../services/order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Get()
  getPendingOrders(): Promise<Order[]> {
    return this.orderService.getPendingOrders();
  }

  @Put()
  createOrder(@Req() request: Request): Promise<number> {
    return this.orderService.createOrder(request.body?.order);
  }

  @Patch()
  updateOrder(@Req() request: Request): Promise<boolean> {
    return this.orderService.updateOrder(request.body);
  }
}