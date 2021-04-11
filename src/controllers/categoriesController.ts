import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import CategoriesRepository from '../repositories/CategoriesRepository';

const index = async (req: Request, res: Response): Promise<Response> => {
  const categoriesRepository = getCustomRepository(CategoriesRepository);
  const categories = await categoriesRepository.listAll();

  return res.json(categories);
};

export default { index };
