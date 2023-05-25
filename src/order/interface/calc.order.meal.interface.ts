import { Brand } from 'src/meal/interface/brand.interface';
import { Meal } from 'src/meal/interface/meal.interface';

export interface CalculatedOrderMeal {
  brand: Brand;
  meals: Meal[];
  amount: number;
  internal_profit: number;
}
