import { useEffect } from 'react';
import { FlexBoxColumn } from '../../components/FlexBox/FlexBoxcolumn';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { feedbacksSelector, fetchFeedbackById } from '../../store/feedbacks/feedbacks.slice';
import FeedbackCard from '../../components/FeedbackCard';
import { GoBackButton } from '../../components/GoBackButton/GoBackButton';

export const FeedbackDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split('/')[1];

  const dispatch = useAppDispatch();
  const { status, feedbackDetail } = useAppSelector(feedbacksSelector);

  const isLoading = status === 'loading' || status === 'idle';

  useEffect(() => {
    dispatch(fetchFeedbackById(id));
  }, []);

  return (
    <FlexBoxColumn sx={{ mx: 'auto', minWidth: 730 }}>
      <GoBackButton onClickGoBackBtn={() => navigate(-1)} />
      {!isLoading && feedbackDetail && <FeedbackCard feedback={feedbackDetail} />}
    </FlexBoxColumn>
  );
};

