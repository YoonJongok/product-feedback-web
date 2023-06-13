import React, { useEffect } from 'react';
import { FlexBoxColumn } from '../../components/FlexBox/FlexBoxcolumn';
import RoadmapHeader from './RoadmapHeader';
import { Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { feedbacksSelector, fetchFeedbacks } from '../../store/feedbacks/feedbacks.slice';
import { getRoadmapStatusConfig } from './Roadmap.config';
import { themeColors } from '../../theme/colors';
import RoadmapCard from '../../components/RoadmapCard';

export const Roadmap = () => {
  const dispatch = useAppDispatch();

  const { status, feedbacks } = useAppSelector(feedbacksSelector);

  const isLoading = status === 'loading' || status === 'idle';

  const roadmapStatusesConfig = getRoadmapStatusConfig(feedbacks);

  useEffect(() => {
    dispatch(fetchFeedbacks());
  }, []);

  return (
    <FlexBoxColumn sx={{ mx: 'auto', minWidth: '1110px' }}>
      <RoadmapHeader />
      <Grid container justifyContent='center' spacing={8} sx={{ flexGrow: 1, mt: 6 }}>
        {!isLoading &&
          roadmapStatusesConfig.map((config) => (
            <Grid key={config.key} item>
              <FlexBoxColumn>
                <Typography
                  variant='medium-01-bold'
                  sx={{ color: themeColors.blue300, textTransform: 'capitalize' }}
                >
                  {config.key} ({config.numOfStatus})
                </Typography>
                <Typography
                  variant='small-01-regular'
                  sx={{ color: themeColors.blue300, textTransform: 'capitalize' }}
                >
                  {config.description}
                </Typography>
              </FlexBoxColumn>
              <FlexBoxColumn sx={{ mt: 6, gap: 6 }}>
                {config.feedbacks.map((feedback) => (
                  <RoadmapCard feedback={feedback} config={config} key={feedback.id} />
                ))}
              </FlexBoxColumn>
            </Grid>
          ))}
      </Grid>
    </FlexBoxColumn>
  );
};

