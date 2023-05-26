import { UUID } from 'crypto';
import Joi from 'joi';
import { v4 as uuidv4 } from 'uuid';

export class CreateMeal {
  id: UUID;
  new: boolean;
  name: string;
  active: boolean;
  amount: number;
  alcohol: boolean;
  item_no?: number;
  summary?: string;
  brand_id: UUID;
  calories?: string;
  is_addon: boolean;
  is_combo: boolean;
  position: number;
  quantity: number;
  home_page: boolean;
  item_type: string;
  meal_tags: string;
  is_deleted: boolean;
  order_note: string;
  description: string;
  minimum_age: number;
  available_no: string;
  meal_keywords: string;
  internal_profit: number;
  meal_category_id: string;
  meal_data_id: string;
  calculated_order_id: string;
}

export const CreateMealSchema = Joi.object<CreateMeal, true>({
  id: Joi.string()
    .guid({ version: ['uuidv3', 'uuidv4', 'uuidv5'] })
    .required()
    .default(uuidv4()),
  new: Joi.boolean().optional().default(false),
  name: Joi.string().required(),
  active: Joi.boolean().optional().default(true),
  amount: Joi.number().required(),
  alcohol: Joi.boolean().optional().default(false),
  item_no: Joi.number().optional(),
  summary: Joi.string().optional(),
  brand_id: Joi.string()
    .guid({ version: ['uuidv3', 'uuidv4', 'uuidv5'] })
    .required(),
  meal_data_id: Joi.string()
    .guid({ version: ['uuidv3', 'uuidv4', 'uuidv5'] })
    .required(),
  calculated_order_id: Joi.string()
    .guid({ version: ['uuidv3', 'uuidv4', 'uuidv5'] })
    .required(),
  calories: Joi.string().optional(),
  is_addon: Joi.boolean().optional().default(false),
  is_combo: Joi.boolean().optional().default(false),
  position: Joi.number().required(),
  quantity: Joi.number().required(),
  home_page: Joi.boolean().required().default(false),
  meal_tags: Joi.string().optional(),
  is_deleted: Joi.boolean().optional().default(false),
  order_note: Joi.string().optional(),
  description: Joi.string().required(),
  minimum_age: Joi.number().optional().default(0),
  available_no: Joi.string().required(),
  meal_keywords: Joi.string().optional(),
  internal_profit: Joi.number().optional().default(0),
  meal_category_id: Joi.string().required(),
  item_type: Joi.string().required(),
});
