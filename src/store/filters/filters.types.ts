export type Filter = 'All' | 'UI' | 'UX' | 'Enhancement' | 'Bug' | 'Feature';

export type SortBy = 'Most Upvotes' | 'Least Upvotes' | 'Most Comments' | 'Least Comments';

export type FiltersState = {
  filter: Filter;
  sortBy: SortBy;
};

