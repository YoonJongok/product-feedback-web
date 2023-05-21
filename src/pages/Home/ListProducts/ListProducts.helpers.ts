import { Filter } from '../../../store/filters/filters.types';
import { Product } from '../../../store/products/products.types';

export const filterProducts = (products: Product[], filter: Filter = 'All') => {
  console.log('filterProducts', filter);
  if (!products || products.length === 0) return [];

  if (filter === 'All') return products;

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === filter.toLowerCase()
  );

  return filteredProducts.length === 0 ? [] : filteredProducts;
};

