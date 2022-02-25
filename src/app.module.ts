import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './products/products';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
})
export class AppModule {}
