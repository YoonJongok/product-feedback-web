import React from 'react';
import { FlexBoxRow } from '../../../components/FlexBox/FlexBoxRow';
import { FlexBoxColumn } from '../../../components/FlexBox/FlexBoxcolumn';
import { GoBackButton } from '../../../components/GoBackButton/GoBackButton';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { themeColors } from '../../../theme/colors';
import AddFeedbackButton from '../../../components/AddFeedbackButton';

export const RoadmapHeader = () => {
  const navigate = useNavigate();
  return (
    <FlexBoxRow
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 8,
        py: '27px',
        backgroundColor: themeColors.blue400,
        borderRadius: '10px',
      }}
    >
      <FlexBoxColumn gap={1}>
        <GoBackButton onClickGoBackBtn={() => navigate(-1)} color={themeColors.white} />
        <Typography variant='medium-03-bold' color={themeColors.white}>
          Roadmap
        </Typography>
      </FlexBoxColumn>
      <AddFeedbackButton />
    </FlexBoxRow>
  );
};

