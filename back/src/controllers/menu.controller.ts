import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { MenuService } from '../services/menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) { }

  @Get()
  findAll(@Req() request: Request): Promise<any[]> {
    return this.menuService.getMenuItems();
  }
}