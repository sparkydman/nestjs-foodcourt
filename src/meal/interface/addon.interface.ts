import { MealData } from './meal.data.interface';

export interface Addon {
  id: string;
  amount: number;
  meal_id: string;
  meal_data: MealData;
  created_at: Date;
  updated_at: Date;
  meal_addon_id: string;
  internal_profit: number;
  min_selection_no: string;
  meal_addon_category_id: string;
  images?: string[];
  is_combo?: boolean;
  position?: number;
  quantity?: number;
  posist_data?: object;
}
