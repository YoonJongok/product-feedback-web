import { FlexBoxColumn } from '../../FlexBox/FlexBoxcolumn';
import { FlexBoxRow } from '../../FlexBox/FlexBoxRow';
import { Box, Link as MuiLink, Skeleton, Typography } from '@mui/material';
import { themeColors } from '../../../theme/colors';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchFeedbacks, feedbacksSelector } from '../../../store/feedbacks/feedbacks.slice';
import { useEffect } from 'react';
import { getRoadmapStatusConfig } from '../../../pages/Roadmap/Roadmap.config';
import { Link } from 'react-router-dom';

export const RoadmapSummary = () => {
  const dispatch = useAppDispatch();

  const { status, feedbacks } = useAppSelector(feedbacksSelector);

  const isLoading = status === 'loading' || status === 'idle';

  const roadmapStatusesConfig = getRoadmapStatusConfig(feedbacks);

  useEffect(() => {
    dispatch(fetchFeedbacks());
  }, []);

  return (
    <FlexBoxColumn
      sx={{ gap: 6, px: 6, py: 5, backgroundColor: themeColors.white, borderRadius: '10px' }}
    >
      <FlexBoxRow justifyContent={'space-between'} alignItems={'center'}>
        <Typography
          variant='medium-01-bold'
          sx={{
            color: themeColors.blue400,
          }}
        >
          Roadmap
        </Typography>
        <MuiLink
          component={Link}
          to={'/roadmap'}
          sx={{
            textDecoration: 'underline',
            fontSize: '13px',
            lineHeight: '18px',
            fontWeight: 700,
            color: themeColors.blue200,
          }}
        >
          View
        </MuiLink>
      </FlexBoxRow>
      <FlexBoxColumn gap={2} minHeight={120}>
        {isLoading && [0, 1, 2, 3].map((_, index) => <RoadmapSummary.Skeleton key={index} />)}
        {!isLoading &&
          roadmapStatusesConfig.map((config) => (
            <FlexBoxRow key={config.key} justifyContent={'space-between'} alignItems={'center'}>
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
              <Typography variant='medium-00-bold' color={themeColors.greyBlue400}>
                {config.numOfStatus}
              </Typography>
            </FlexBoxRow>
          ))}
      </FlexBoxColumn>
    </FlexBoxColumn>
  );
};

RoadmapSummary.Skeleton = function RoadmapSkeleton() {
  return (
    <FlexBoxRow justifyContent={'space-between'} alignItems={'center'}>
      <FlexBoxRow sx={{ gap: 4, alignItems: 'center' }}>
        <Skeleton
          sx={{
            width: '8px',
            height: '16px',
            // borderRadius: '50%',
            backgroundColor: themeColors.greyBlue300,
          }}
        />
        <Skeleton sx={{ width: 80, height: 22, backgroundColor: themeColors.greyBlue300 }} />
      </FlexBoxRow>
      <Skeleton sx={{ width: 10, height: 22, backgroundColor: themeColors.greyBlue300 }} />
    </FlexBoxRow>
  );
};

