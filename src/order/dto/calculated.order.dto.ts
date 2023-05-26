import { UUID } from 'crypto';
import Joi from 'joi';
import { v4 as uuidv4 } from 'uuid';

export class CreateCalculatedOrder {
  id: UUID;
  total_amount: number;
  free_delivery: boolean;
  delivery_fee: number;
  service_charge: number;
  lat: string;
  lng: string;
  cokitchen_polygon_id: string;
  user_id: string;
  cokitchen_id: string;
  pickup: boolean;
  prev_price: number;
}

export const CreateCalculatedOrderSchema = Joi.object<
  CreateCalculatedOrder,
  true
>({
  id: Joi.string()
    .guid()
    .uuid({ version: ['uuidv3', 'uuidv4', 'uuidv4'] })
    .required()
    .default(uuidv4()),
  total_amount: Joi.number().optional().default(0),
  free_delivery: Joi.boolean().optional().default(false),
  delivery_fee: Joi.number().optional().default(0),
  service_charge: Joi.number().optional().default(0),
  lat: Joi.string().required(),
  lng: Joi.string().required(),
  cokitchen_polygon_id: Joi.string().required(),
  user_id: Joi.string().required(),
  cokitchen_id: Joi.string().required(),
  pickup: Joi.boolean().required().default(false),
  prev_price: Joi.number().optional().default(0),
});
