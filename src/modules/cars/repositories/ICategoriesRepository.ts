import { Category } from "../model/Category";
import { ICategoryParams } from "../interfaces/ICategories";

export interface ICategoriesRepository {
  create({name, description}: ICategoryParams): void;
  list(): Category[];
  findByName(name: string): Category;
}
