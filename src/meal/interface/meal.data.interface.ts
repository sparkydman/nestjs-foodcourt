export interface MealData {
  id: string;
  name: string;
  active: boolean;
  amount?: string;
  brand_id?: string;
  item_type?: string;
  created_at?: Date;
  updated_at?: Date;
  new?: boolean;
}
