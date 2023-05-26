import { UUID } from 'crypto';
import Joi from 'joi';

export class CreateImage {
  id: UUID;
  url: string;
  item_id: UUID;
}

export const CreateImageSchema = Joi.object<CreateImage, true>({
  id: Joi.string()
    .guid()
    .uuid({ version: ['uuidv3', 'uuidv4', 'uuidv4'] })
    .required(),
  item_id: Joi.string()
    .guid()
    .uuid({ version: ['uuidv3', 'uuidv4', 'uuidv4'] })
    .required(),
  url: Joi.string().required(),
});
