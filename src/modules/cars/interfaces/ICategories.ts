import { Category } from "../model/Category";

export interface ICategoryParams {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({name, description}: ICategoryParams): void;
  list(): Category[];
  findByName(name: string): Category;
}
