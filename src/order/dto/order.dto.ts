import { CalculatedOrder } from './calculated.order.dto';
import { Log } from './logs.dto';
import { OrderTotalAmountHistory } from './order.amout.history.dto';
import { OrderType } from './order.type.dto';

export class Order {
  id: string;
  user_id: string;
  completed: boolean;
  cancelled: boolean;
  kitchen_cancelled: boolean;
  kitchen_accepted: boolean;
  kitchen_dispatched: boolean;
  kitchen_dispatched_time: Date;
  completed_time: Date;
  rider_id: string;
  kitchen_prepared: boolean;
  rider_assigned: boolean;
  paid: boolean;
  order_code: string;
  order_change?: object = null;
  calculated_order_id: string;
  created_at: Date;
  updated_at: Date;
  logs: Log[];
  kitchen_verified_time: Date;
  kitchen_completed_time: Date;
  shop_accepted: boolean;
  shop_prepared: boolean;
  no_of_mealbags_delivered: number;
  no_of_drinks_delivered: number;
  rider_started_time?: Date = null;
  rider_started: boolean;
  rider_arrived_time?: Date = null;
  rider_arrived: boolean;
  is_failed_trip: boolean;
  failed_trip_details: object;
  box_number: string;
  shelf_id?: string;
  order_total_amount_history: OrderTotalAmountHistory[];
  scheduled: boolean;
  confirmed_by_id?: string;
  completed_by_id?: string;
  scheduled_delivery_date?: Date = null;
  scheduled_delivery_time?: Date = null;
  is_hidden: boolean;
  calculated_order: CalculatedOrder;
  order_type: OrderType;
}
