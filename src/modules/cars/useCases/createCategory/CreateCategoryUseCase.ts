import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { ICategoryParams } from "../../interfaces/ICategories";

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: ICategoryParams): Promise<void>{
    const categoriesAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoriesAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
