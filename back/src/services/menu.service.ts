import { Injectable } from '@nestjs/common';
import { MenuRepository } from '../repositories/menu.repository';

@Injectable()
export class MenuService {
    constructor(private readonly menuRepository: MenuRepository) { }
    getMenuItems(): Promise<any[]> {
        return this.menuRepository.getMenuItems();
    }
}
