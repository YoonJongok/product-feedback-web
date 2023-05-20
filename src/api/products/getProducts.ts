import { mockProduct } from '../../utils/mockData/mockProduct';
import { Product, ProductSchema } from '../../store/products/products.types';

export const getProducts = async (): Promise<Product[] | string> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockProduct), 2000))
    .then((res) => {
      const products = ProductSchema.array().safeParse(res);
      if (!products.success) {
        throw new Error(products.error.message);
      } else {
        return products.data;
      }
    })
    .catch((err) => err);
};

