import React from 'react';
import { FlexBoxColumn } from '../../components/FlexBox/FlexBoxcolumn';
import { FlexBoxRow } from '../../components/FlexBox/FlexBoxRow';
import { themeColors } from '../../theme/colors';
import { Typography } from '@mui/material';
import { ReactComponent as ChevronLeftIcon } from '../../assets/shared/icon-arrow-left.svg';
import FeedbackInput from '../../components/FeedbackInput';
import { CategorySelect } from './CategorySelect/CategorySelect';

export const AddFeedback = () => {
  return (
    <FlexBoxColumn
      sx={{
        mx: 'auto',
        minWidth: '540px',
        gap: '68px',
      }}
    >
      <FlexBoxRow sx={{ justifyContent: 'flex-start', alignItems: 'center', gap: '15px' }}>
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
        }}
      >
        <Typography
          variant='medium-03-bold'
          sx={{ textTransform: 'capitalize', color: themeColors.blue300, mb: 10 }}
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
      </FlexBoxColumn>
    </FlexBoxColumn>
  );
};

