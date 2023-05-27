import { Category } from '../products/products.types';

export type SortBy = 'Most Upvotes' | 'Least Upvotes' | 'Most Comments' | 'Least Comments';

export type FiltersState = {
  filter: Category;
  sortBy: SortBy;
};

