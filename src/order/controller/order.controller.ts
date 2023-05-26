import { Controller, Get, Param } from '@nestjs/common';
import { OrderServices } from '../service/order.service';
import { Order } from '../interface/order.interface';
import { HighestOrderedMeal } from '../interface/calculated.order.interface';

@Controller('orders')
export class OrderController {
  constructor(private _orderServices: OrderServices) {}

  @Get()
  async getOrders(): Promise<Order[]> {
    return this._orderServices.FindAllOrders();
  }

  @Get('/highest_meals/:calculated_order_id')
  async getHighestMeals(
    @Param('calculated_order_id') calculated_order_id: string,
  ): Promise<HighestOrderedMeal> {
    return this._orderServices.FindHighestOrderedMeals(calculated_order_id);
  }
}
