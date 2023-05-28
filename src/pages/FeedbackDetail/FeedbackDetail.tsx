import React, { useEffect } from 'react';
import { FlexBoxColumn } from '../../components/FlexBox/FlexBoxcolumn';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { feedbacksSelector, fetchFeedbackById } from '../../store/feedbacks/feedbacks.slice';

export const FeedbackDetail = () => {
  const dispatch = useAppDispatch();
  const { status, feedbackDetail } = useAppSelector(feedbacksSelector);

  console.log(feedbackDetail);

  const location = useLocation();
  const id = location.pathname.split('/')[1];

  useEffect(() => {
    dispatch(fetchFeedbackById(id));
  }, []);

  return (
    <FlexBoxColumn sx={{ mx: 'auto', minWidth: 730 }}>
      <h1>Feedback Detail</h1>
    </FlexBoxColumn>
  );
};

