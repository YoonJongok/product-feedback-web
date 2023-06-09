import { useEffect } from 'react';
import { FlexBoxColumn } from '../../components/FlexBox/FlexBoxcolumn';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { feedbacksSelector, fetchFeedbackById } from '../../store/feedbacks/feedbacks.slice';
import FeedbackCard from '../../components/FeedbackCard';

export const FeedbackDetail = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[1];

  const dispatch = useAppDispatch();
  const { status, feedbackDetail } = useAppSelector(feedbacksSelector);

  console.log(status);

  const isLoading = status === 'loading' || status === 'idle';

  // if (isLoading) return <div>Loading...</div>;
  console.log(feedbackDetail);

  useEffect(() => {
    dispatch(fetchFeedbackById(id));
  }, []);

  return (
    <FlexBoxColumn sx={{ mx: 'auto', minWidth: 730 }}>
      {!isLoading && feedbackDetail && <FeedbackCard feedback={feedbackDetail} />}
    </FlexBoxColumn>
  );
};

