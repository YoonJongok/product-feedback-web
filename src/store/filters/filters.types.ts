import { Category } from '../feedbacks/feedbacks.types';

export type SortBy = 'Most Upvotes' | 'Least Upvotes' | 'Most Comments' | 'Least Comments';

export type FiltersState = {
  filter: Category;
  sortBy: SortBy;
};

