import { UUID } from 'crypto';
import Joi from 'joi';
import { v4 as uuidv4 } from 'uuid';

export class CreateBrand {
  id: UUID;
  name: string;
}

export const CreateBrandSchema = Joi.object<CreateBrand, true>({
  id: Joi.string()
    .guid()
    .uuid({ version: ['uuidv3', 'uuidv4', 'uuidv4'] })
    .required()
    .default(uuidv4()),
  name: Joi.string().required(),
});
