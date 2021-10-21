import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { ICategoryParams } from '../interfaces/ICategories';

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: ICategoryParams): void {
    const categoriesAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoriesAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
