import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { Feedback } from '../../store/feedbacks/feedbacks.types';
import { FlexBoxRow } from '../FlexBox/FlexBoxRow';
import { themeColors } from '../../theme/colors';
import { RoadmapConfig } from '../../pages/Roadmap/Roadmap.config';
import { FlexBoxColumn } from '../FlexBox/FlexBoxcolumn';
import { ReactComponent as ChevronUpIcon } from '../../assets/shared/icon-arrow-up.svg';
import { ReactComponent as CommentIcon } from '../../assets/shared/icon-comments.svg';
import { useNavigate } from 'react-router-dom';
interface RoadmapCardProps {
  feedback: Feedback;
  config: RoadmapConfig;
}

export const RoadmapCard = ({ feedback, config }: RoadmapCardProps) => {
  const naviate = useNavigate();

  return (
    <Paper
      sx={{
        minHeight: 200,
        width: 250,
        px: '14px',
        py: '24px',
        borderRadius: '5px',
        borderTop: `5px solid ${config.bulletColor}`,
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
        cursor: 'pointer',
      }}
      onClick={() => naviate(`/${feedback.id}`)}
    >
      <FlexBoxRow sx={{ gap: 4, alignItems: 'center' }}>
        <Box
          sx={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: config.bulletColor,
          }}
        ></Box>
        <Typography
          color={themeColors.greyBlue400}
          sx={{
            lineHeight: '0px',
            fontSize: '16px',
          }}
        >
          {config.key}
        </Typography>
      </FlexBoxRow>
      <FlexBoxColumn sx={{ mt: 3, gap: 4 }}>
        <FlexBoxColumn>
          <Typography variant='medium-00-bold'>{feedback.title}</Typography>
          <Typography
            variant='small-00-regular'
            sx={{ widows: '90%', color: themeColors.greyBlue400 }}
          >
            {feedback.description.length > 100
              ? `${feedback.description.slice(0, 100)}...`
              : feedback.description}
          </Typography>
        </FlexBoxColumn>
        <Button
          variant='contained'
          color='primary'
          sx={{ color: themeColors.blue200, padding: '2px 16px', fontWeight: 500 }}
        >
          {feedback.category}
        </Button>
        <FlexBoxRow justifyContent={'space-between'} alignItems={'center'}>
          <Button
            variant='vote'
            color='primary'
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <ChevronUpIcon /> {feedback.upvotes}
          </Button>
          <FlexBoxRow alignItems={'center'} gap={2}>
            <CommentIcon />
            <Typography variant='small-02-bold' sx={{ color: themeColors.greyBlue400, pt: '3px' }}>
              {feedback.comments && !!feedback.comments.length ? feedback.comments.length : 0}
            </Typography>
          </FlexBoxRow>
        </FlexBoxRow>
      </FlexBoxColumn>
    </Paper>
  );
};

