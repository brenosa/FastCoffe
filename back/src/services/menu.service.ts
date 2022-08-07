import { Injectable } from '@nestjs/common';
import { Menu } from '../entities/menu.entity';
import { MenuRepository } from '../repositories/menu.repository';

@Injectable()
export class MenuService {
    constructor(private readonly menuRepository: MenuRepository) { }
    
    getMenuItems(): Promise<any[]> {
        return this.menuRepository.getMenuItems();
    }

    getMenu(): Promise<Menu[]> {
        return this.menuRepository.getMenu();
    }

    createMenu(menu: Menu): Promise<boolean> {
        return this.menuRepository.save(menu);
    }

    updateMenu(menu: Menu): Promise<boolean> {
        return this.menuRepository.update(menu);
    }

    deleteMenu(menuId: number): Promise<boolean> {
        return this.menuRepository.delete(menuId);
    }
}
