import { UUID } from 'crypto';
import Joi from 'joi';

export class CreateLog {
  description: string;
  order_id: UUID;
}

export const CreateLogSchema = Joi.object<CreateLog, true>({
  order_id: Joi.string()
    .guid()
    .uuid({ version: ['uuidv3', 'uuidv4', 'uuidv4'] })
    .required(),
  description: Joi.string().required(),
});
