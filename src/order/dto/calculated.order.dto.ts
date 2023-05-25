import { AddressDetails } from './address.detail.dto';
import { CalculatedOrderMeal } from './calc.order.meal.dto';

export class CalculatedOrder {
  id: string;
  total_amount: number;
  free_delivery: boolean;
  delivery_fee: number;
  service_charge: number;
  address_details: AddressDetails;
  meals: CalculatedOrderMeal[];
  lat: string;
  lng: string;
  cokitchen_polygon_id: string;
  user_id: string;
  cokitchen_id: string;
  pickup: boolean;
  prev_price: string;
}