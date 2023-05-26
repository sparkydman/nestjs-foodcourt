import { UUID } from 'crypto';
import Joi from 'joi';
import { v4 as uuidv4 } from 'uuid';

export class CreateOrder {
  id: UUID;
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
  calculated_order_id: string;
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
  box_number: string;
  shelf_id?: string;
  scheduled: boolean;
  confirmed_by_id?: string;
  completed_by_id?: string;
  scheduled_delivery_date?: Date = null;
  scheduled_delivery_time?: Date = null;
  is_hidden: boolean;
  meal_id: string;
}

export const CreateOrderSchema = Joi.object<CreateOrder, true>({
  id: Joi.string()
    .guid({ version: ['uuidv3', 'uuidv4', 'uuidv5'] })
    .required()
    .default(uuidv4()),
  user_id: Joi.string().required(),
  completed: Joi.boolean().optional().default(false),
  cancelled: Joi.boolean().optional().default(false),
  kitchen_cancelled: Joi.boolean().optional().default(false),
  kitchen_accepted: Joi.boolean().optional().default(false),
  kitchen_dispatched: Joi.boolean().optional().default(false),
  completed_time: Joi.date().required(),
  rider_id: Joi.string().required(),
  kitchen_prepared: Joi.boolean().optional().default(false),
  rider_assigned: Joi.boolean().optional().default(false),
  paid: Joi.boolean().optional().default(false),
  order_code: Joi.string().required(),
  calculated_order_id: Joi.string()
    .guid({ version: ['uuidv3', 'uuidv4', 'uuidv5'] })
    .optional(),
  meal_id: Joi.string()
    .guid({ version: ['uuidv3', 'uuidv4', 'uuidv5'] })
    .required(),
  kitchen_verified_time: Joi.date().optional(),
  kitchen_completed_time: Joi.date().optional(),
  shop_accepted: Joi.boolean().optional().default(false),
  shop_prepared: Joi.boolean().optional().default(false),
  no_of_mealbags_delivered: Joi.number().required(),
  no_of_drinks_delivered: Joi.number().optional().default(0),
  rider_started_time: Joi.date().optional(),
  rider_started: Joi.boolean().optional().default(false),
  rider_arrived_time: Joi.date().optional(),
  rider_arrived: Joi.boolean().optional().default(false),
  is_failed_trip: Joi.boolean().optional().default(false),
  box_number: Joi.string().required(),
  shelf_id: Joi.string().optional(),
  scheduled: Joi.boolean().optional().default(false),
  confirmed_by_id: Joi.string().optional(),
  completed_by_id: Joi.string().optional(),
  scheduled_delivery_date: Joi.date().optional(),
  kitchen_dispatched_time: Joi.date().optional(),
  scheduled_delivery_time: Joi.date().optional(),
  is_hidden: Joi.boolean().optional().default(false),
});
