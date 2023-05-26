import { Injectable } from '@nestjs/common';
import { Order } from '../interface/order.interface';
import { Knex, knex } from 'knex';
import { getAllOrdersQuery, highestMealsOrderedQuery } from './queries';
import { config } from 'knexfile';
import { HighestOrderedMeal } from '../interface/calculated.order.interface';

@Injectable()
export class OrderServices {
  private readonly db = knex(config[process.env.NODE_ENV]);

  async FindAllOrders(): Promise<Order[]> {
    const orders = await this.db.raw(getAllOrdersQuery);

    return orders.rows;
  }

  async FindHighestOrderedMeals(
    calculated_order_id: string,
  ): Promise<HighestOrderedMeal> {
    const orders = await this.db.raw(highestMealsOrderedQuery, [
      calculated_order_id,
    ]);

    return orders.rows;
  }
}
