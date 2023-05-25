export class MealData {
  id: string;
  name: string;
  active: boolean;
  amount?: number = 0;
  brand_id?: string;
  item_type?: string;
  created_at?: Date = new Date();
  updated_at?: Date = new Date();
  new?: boolean;
}
