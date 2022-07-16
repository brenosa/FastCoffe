import { Injectable } from '@nestjs/common';
import { Menu } from '../entities/menu.entity';
import { MenuRepository } from '../repositories/menu.repository';

@Injectable()
export class MenuService {
    constructor(private readonly menuRepository: MenuRepository) { }
    
    getMenuItems(): Promise<any[]> {
        return this.menuRepository.getMenuItems();
    }

    createMenu(menu: Menu): Promise<boolean> {
        return this.menuRepository.save(menu);
    }

    updateMenu(menu: Menu): Promise<boolean> {
        return this.menuRepository.update(menu);
    }

    deleteMenu(menu: Menu): Promise<boolean> {
        return this.menuRepository.delete(menu);
    }
}
