import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AddFeedbackButton = () => {
  const navigate = useNavigate();
  return (
    <Button variant='containdPurple' onClick={() => navigate('/add')}>
      Add Feedback
    </Button>
  );
};

