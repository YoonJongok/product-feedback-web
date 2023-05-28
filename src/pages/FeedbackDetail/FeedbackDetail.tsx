import React from 'react';
import { FlexBoxColumn } from '../../components/FlexBox/FlexBoxcolumn';
import { useLocation } from 'react-router-dom';

export const FeedbackDetail = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[1];

  return (
    <FlexBoxColumn sx={{ mx: 'auto', minWidth: 730 }}>
      <h1>Feedback Detail</h1>
    </FlexBoxColumn>
  );
};

