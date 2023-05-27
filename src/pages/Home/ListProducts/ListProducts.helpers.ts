import { Filter, SortBy } from '../../../store/filters/filters.types';
import { Product } from '../../../store/products/products.types';

export const filterProducts = (
  products: Product[],
  filter: Filter = 'All',
  sortBy: SortBy = 'Most Upvotes'
) => filterProductsByFilter(filterProductsBySort(products, sortBy), filter);

export const filterProductsByFilter = (products: Product[], filter: Filter = 'All') => {
  if (!products || products.length === 0) return [];

  if (filter === 'All') return products;

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === filter.toLowerCase()
  );

  return filteredProducts.length === 0 ? [] : filteredProducts;
};

const filterProductsBySort = (products: Product[], sortBy: SortBy = 'Most Upvotes') => {
  if (!products || products.length === 0) return [];

  switch (sortBy) {
    case 'Most Upvotes':
      return products
        .filter((product) => product.upvotes >= 0)
        .sort((a, b) => b.upvotes - a.upvotes);
    case 'Least Upvotes':
      return products
        .filter((product) => product.upvotes >= 0)
        .sort((a, b) => a.upvotes - b.upvotes);
    case 'Most Comments':
      return products
        .filter((product) => product.comments && product.comments.length >= 0)
        .sort((a, b) => b.comments.length - a.comments.length);
    case 'Least Comments':
      return products
        .filter((product) => product.comments && product.comments.length >= 0)
        .sort((a, b) => a.comments.length - b.comments.length);
    default:
      return products;
  }
};

