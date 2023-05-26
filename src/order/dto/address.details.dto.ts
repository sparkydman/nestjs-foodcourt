import { UUID } from 'crypto';
import Joi from 'joi';

export class CreateAddress {
  id: UUID;
  city: string;
  name: string;
  address_line: string;
  building_number: string;
  calculated_order_id: string;
}

export const CreateAddressSchema = Joi.object<CreateAddress, true>({
  id: Joi.string()
    .guid()
    .uuid({ version: ['uuidv3', 'uuidv4', 'uuidv4'] })
    .required(),
  calculated_order_id: Joi.string()
    .guid()
    .uuid({ version: ['uuidv3', 'uuidv4', 'uuidv4'] })
    .required(),
  city: Joi.string().required(),
  name: Joi.string().required(),
  address_line: Joi.string().required(),
  building_number: Joi.string().required(),
});
