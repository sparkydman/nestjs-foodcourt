import { AddressDetails } from './address.detail.interface';
import { CalculatedOrderMeal } from './calc.order.meal.interface';

export interface CalculatedOrder {
  id: string;
  total_amount: string;
  free_delivery: boolean;
  delivery_fee: string;
  service_charge: string;
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
