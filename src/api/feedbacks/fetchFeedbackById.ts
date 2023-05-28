import { mockFeedback } from '../../utils/mockData/mockFeedback';

export const fetchFeedbackById = async (id: number | string) => {
  // create a new promise that will resolve after 2 seconds which returns the feedback detail from the mock data by given id
  return new Promise((resolve) =>
    setTimeout(() => resolve(mockFeedback.find((feedback) => feedback.id === id)), 2000)
  );
};

