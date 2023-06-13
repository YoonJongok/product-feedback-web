import { Comment } from '../../store/feedbacks/feedbacks.types';
import { apiService } from '../apiService';

export const addComment = async (comment: Comment) => {
  return await apiService.post('/comments', comment);
};

