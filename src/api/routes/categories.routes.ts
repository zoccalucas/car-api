import { Request, Response, Router } from 'express';

import { CategoriesRepository } from '../../core/repositories/CategoriesRepository';
import { CreateCategoryService } from '../../core/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({name, description});

  return response.status(201).send();
});

categoriesRoutes.get("/",  (request: Request, response: Response) => {
  const all = categoriesRepository.list();

  return response.status(201).json(all);
});

export { categoriesRoutes };
