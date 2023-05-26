import { Module } from '@nestjs/common';
import { OrderServices } from './order/service/order.service';
import { OrderModule } from './order/order.module';

@Module({
  imports: [OrderModule],
})
export class AppModule {}
