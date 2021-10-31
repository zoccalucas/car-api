import { Category } from "../entities/Category";
import { ICategoryParams } from "../interfaces/ICategories";

export interface ICategoriesRepository {
  create({name, description}: ICategoryParams): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
}
