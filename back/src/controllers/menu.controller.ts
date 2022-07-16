import { Controller, Delete, Get, Patch, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { MenuService } from '../services/menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) { }

  @Get()
  getMenuItems(): Promise<any[]> {
    return this.menuService.getMenuItems();
  }

  @Put()
  createMenu(@Req() request: Request): Promise<boolean> {
    return this.menuService.createMenu(request.body);
  }

  @Patch()
  updateMenu(@Req() request: Request): Promise<boolean> {
    return this.menuService.updateMenu(request.body);
  }

  @Delete()
  deleteMenu(@Req() request: Request): Promise<boolean> {
    return this.menuService.deleteMenu(request.body);
  }
}