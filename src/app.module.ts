import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products/products';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsService } from './products/products.service';
import { Product } from './models/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestapp',
      synchronize: true,
      logging: false,
      entities: [Product],
    }),
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [AppController, ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
