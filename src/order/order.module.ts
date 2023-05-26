import { Module } from '@nestjs/common';
import { OrderServices } from './service/order.service';
import { OrderController } from './controller/order.controller';

@Module({
  providers: [OrderServices],
  controllers: [OrderController],
})
export class OrderModule {}
