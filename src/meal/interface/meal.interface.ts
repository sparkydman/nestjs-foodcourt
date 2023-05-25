import { Addon } from './addon.interface';
import { Brand } from './brand.interface';

export interface Meal {
  id: string;
  new: boolean;
  name: string;
  brand: Brand;
  active: boolean;
  addons: Addon[];
  amount: string;
  images: string[];
  alcohol: boolean;
  item_no: null;
  summary: null;
  brand_id: string;
  calories: string;
  is_addon: boolean;
  is_combo: boolean;
  position: number;
  quantity: number;
  home_page: boolean;
  item_type: string;
  meal_tags: string[];
  created_at: Date;
  is_deleted: boolean;
  order_note: string;
  updated_at: Date;
  description: string;
  minimum_age: string;
  posist_data: object;
  available_no: string;
  meal_keywords: string[];
  internal_profit: number;
  meal_category_id: string;
}
