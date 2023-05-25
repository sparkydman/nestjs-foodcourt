import { UUID } from 'crypto';
import Joi from 'joi';

export const CreateOrderTotalAmountHistorySchema = Joi.object<
  CreateOrderTotalAmountHistory,
  true
>({
  order_id: Joi.string()
    .guid()
    .uuid({ version: ['uuidv3', 'uuidv4', 'uuidv4'] })
    .required(),
  total_amount: Joi.number().required(),
});

export class CreateOrderTotalAmountHistory {
  total_amount: number;
  order_id: UUID;
}
