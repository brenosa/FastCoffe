import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { MenuController } from './controllers/menu.controller';
import { OrderController } from './controllers/order.controller';
import { ProductController } from './controllers/product.controller';
import { MenuRepository } from './repositories/menu.repository';
import { OrderRepository } from './repositories/order.repository';
import { ProductRepository } from './repositories/product.repository';
import { MenuService } from './services/menu.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [AppController, ProductController, MenuController, OrderController],
  providers: [AppService, ProductService, ProductRepository, MenuRepository, MenuService, OrderService, OrderRepository],
})
export class AppModule { }
