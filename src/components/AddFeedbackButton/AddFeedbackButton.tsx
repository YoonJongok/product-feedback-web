import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as PlusIcon } from '../../assets/shared/icon-plus.svg';

export const AddFeedbackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant='containdPurple'
      onClick={() => navigate('/add')}
      sx={{ gap: '5px', height: 44 }}
    >
      <PlusIcon /> Add Feedback
    </Button>
  );
};

