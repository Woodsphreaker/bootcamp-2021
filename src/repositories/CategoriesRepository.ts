import { EntityRepository, Repository } from 'typeorm';

import Category from '../models/Category';

@EntityRepository(Category)
class CategoriesRepository extends Repository<Category> {
  public async listAll(): Promise<Category[]> {
    const categories = await this.find();
    return categories;
  }
}

export default CategoriesRepository;
