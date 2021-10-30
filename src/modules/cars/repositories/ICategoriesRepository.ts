import { Category } from "../entities/Category";
import { ICategoryParams } from "../interfaces/ICategories";

export interface ICategoriesRepository {
  create({name, description}: ICategoryParams): void;
  list(): Category[];
  findByName(name: string): Category;
}
