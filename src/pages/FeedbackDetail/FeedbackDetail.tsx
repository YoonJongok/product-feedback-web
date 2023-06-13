import { useEffect } from 'react';
import { FlexBoxColumn } from '../../components/FlexBox/FlexBoxcolumn';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { feedbacksSelector, fetchFeedbackById } from '../../store/feedbacks/feedbacks.slice';
import FeedbackCard from '../../components/FeedbackCard';
import { GoBackButton } from '../../components/GoBackButton/GoBackButton';
import { FlexBoxRow } from '../../components/FlexBox/FlexBoxRow';
import { themeColors } from '../../theme/colors';
import Comment from '../../components/Comment';
import { Typography } from '@mui/material';
import AddCommentForm from '../../components/AddCommentForm';

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
    <FlexBoxColumn sx={{ mx: 'auto', minWidth: 730, gap: 6 }}>
      <FlexBoxRow sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <GoBackButton onClickGoBackBtn={() => navigate(-1)} />
      </FlexBoxRow>
      {!isLoading && feedbackDetail && (
        <>
          <FeedbackCard feedback={feedbackDetail} />
          <FlexBoxColumn
            sx={{
              px: '34px',
              py: '24px',
              borderRadius: '10px',
              backgroundColor: themeColors.white,
            }}
          >
            <Typography variant='medium-01-bold'>
              {!!feedbackDetail.comments.length ? feedbackDetail.comments.length : 0} Comments
            </Typography>
            {!feedbackDetail.comments.length && (
              <Typography
                variant='medium-00-regular'
                sx={{ mt: 4, color: themeColors.greyBlue400 }}
              >
                No comments
              </Typography>
            )}
            {feedbackDetail.comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </FlexBoxColumn>
        </>
      )}

      <AddCommentForm />
    </FlexBoxColumn>
  );
};

