import { UUID } from 'crypto';
import Joi from 'joi';
import { v4 as uuidv4 } from 'uuid';

export class CreateMealData {
  id: UUID;
  name: string;
  active: boolean;
  amount?: number;
  brand_id?: string;
  item_type?: string;
  new?: boolean;
}

export const CreateMealDataSchema = Joi.object<CreateMealData, true>({
  id: Joi.string()
    .guid()
    .uuid({ version: ['uuidv3', 'uuidv4', 'uuidv4'] })
    .required()
    .default(uuidv4()),
  name: Joi.string().required(),
  active: Joi.boolean().required().default(true),
  amount: Joi.number().optional().default(0),
  brand_id: Joi.string()
    .guid()
    .uuid({ version: ['uuidv3', 'uuidv4', 'uuidv4'] })
    .required(),
  item_type: Joi.string().required(),
  new: Joi.boolean().required().default(true),
});
