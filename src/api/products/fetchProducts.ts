import { mockFeedback } from '../../utils/mockData/mockFeedback';
import { Product, FeedbackSchema } from '../../store/feedbacks/feedbacks.types';

export const fetchProducts = async (): Promise<Product[] | string> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockFeedback), 2000))
    .then((res) => {
      const products = FeedbackSchema.array().safeParse(res);
      if (!products.success) {
        throw new Error(products.error.message);
      } else {
        return products.data;
      }
    })
    .catch((err) => err);
};

