import { FlexBoxColumn } from '../../components/FlexBox/FlexBoxcolumn';
import { FlexBoxRow } from '../../components/FlexBox/FlexBoxRow';
import { themeColors } from '../../theme/colors';
import { Button, Typography } from '@mui/material';
import { ReactComponent as ChevronLeftIcon } from '../../assets/shared/icon-arrow-left.svg';
import FeedbackInput from '../../components/FeedbackInput';
import { CategorySelect } from './CategorySelect/CategorySelect';
import { useNavigate } from 'react-router-dom';

export const AddFeedback = () => {
  const navigate = useNavigate();

  return (
    <FlexBoxColumn
      sx={{
        mx: 'auto',
        minWidth: '540px',
        gap: '68px',
      }}
    >
      <FlexBoxRow
        sx={{ justifyContent: 'flex-start', alignItems: 'center', gap: '15px', cursor: 'pointer' }}
        onClick={() => navigate(-1)}
      >
        <ChevronLeftIcon style={{ fill: themeColors.blue400 }} />
        <Typography
          variant='small-01-bold'
          sx={{ textTransform: 'capitalize', color: themeColors.greyBlue400, pt: '3px' }}
        >
          Go back
        </Typography>
      </FlexBoxRow>
      <FlexBoxColumn
        sx={{
          background: themeColors.white,
          px: 10,
          py: '50px',
          borderRadius: '10px',
          gap: '24px',
          mb: 5,
        }}
      >
        <Typography
          variant='medium-03-bold'
          sx={{ textTransform: 'capitalize', color: themeColors.blue300, mb: 5 }}
        >
          create new feedback
        </Typography>
        <FeedbackInput
          label='Feedback Title'
          placeholder='Add a short, descriptive headline'
          type='text'
        />
        <CategorySelect label='Category' placeholder='Choose a category for your feedback' />
        <FeedbackInput
          label='Feedback Detail'
          placeholder='Include any specific comments on what should be improved, added, etc.'
          type='textarea'
        />
        <FlexBoxRow justifyContent={'flex-end'} gap={4} sx={{ width: '100%' }}>
          <Button
            fullWidth
            variant='contained'
            sx={{
              bgcolor: themeColors.blue400,
              color: themeColors.white,
            }}
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button fullWidth variant='containdPurple'>
            Add feedback
          </Button>
        </FlexBoxRow>
      </FlexBoxColumn>
    </FlexBoxColumn>
  );
};

