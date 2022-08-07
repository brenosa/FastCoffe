import { Controller, Delete, Get, Param, Patch, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { Menu } from '../entities/menu.entity';
import { MenuService } from '../services/menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) { }

  @Get('/items')
  getMenuItems(): Promise<any[]> {
    return this.menuService.getMenuItems();
  }

  @Get()
  getMenu(): Promise<Menu[]> {
    return this.menuService.getMenu();
  }

  @Put()
  createMenu(@Req() request: Request): Promise<boolean> {
    return this.menuService.createMenu(request.body);
  }

  @Patch()
  updateMenu(@Req() request: Request): Promise<boolean> {
    return this.menuService.updateMenu(request.body);
  }

  @Delete('/:menuId')
  deleteMenu(@Param('menuId') menuId): Promise<boolean> {
    return this.menuService.deleteMenu(menuId);
  }
}