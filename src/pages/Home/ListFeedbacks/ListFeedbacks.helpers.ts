import { SortBy } from '../../../store/filters/filters.types';
import { Category, Feedback } from '../../../store/feedbacks/feedbacks.types';

export const filterFeedbacks = (
  feedbacks: Feedback[],
  filter: Category = 'All',
  sortBy: SortBy = 'Most Upvotes'
) => filterFeedbacksByFilter(filterFeedbacksBySort(feedbacks, sortBy), filter);

export const filterFeedbacksByFilter = (feedbacks: Feedback[], filter: Category = 'All') => {
  if (!feedbacks || feedbacks.length === 0) return [];

  if (filter === 'All') return feedbacks;

  const filteredFeedbacks = feedbacks.filter(
    (feedback) => feedback.category.toLowerCase() === filter.toLowerCase()
  );

  return filteredFeedbacks.length === 0 ? [] : filteredFeedbacks;
};

const filterFeedbacksBySort = (feedbacks: Feedback[], sortBy: SortBy = 'Most Upvotes') => {
  if (!feedbacks || feedbacks.length === 0) return [];

  switch (sortBy) {
    case 'Most Upvotes':
      return feedbacks
        .filter((feedback) => feedback.upvotes >= 0)
        .sort((a, b) => b.upvotes - a.upvotes);
    case 'Least Upvotes':
      return feedbacks
        .filter((feedback) => feedback.upvotes >= 0)
        .sort((a, b) => a.upvotes - b.upvotes);
    case 'Most Comments':
      return feedbacks
        .filter((feedback) => feedback.comments && feedback.comments.length >= 0)
        .sort((a, b) => b.comments.length - a.comments.length);
    case 'Least Comments':
      return feedbacks
        .filter((feedback) => feedback.comments && feedback.comments.length >= 0)
        .sort((a, b) => a.comments.length - b.comments.length);
    default:
      return feedbacks;
  }
};

