import React from 'react';
import { FlexBoxColumn } from '../FlexBox/FlexBoxcolumn';
import { FlexBoxRow } from '../FlexBox/FlexBoxRow';
import { Box, Typography } from '@mui/material';
import { themeColors } from '../../theme/colors';

const roadmapConfig = [
  { key: 'Planned', bulletColor: themeColors.coral },
  { key: 'In-Progress', bulletColor: themeColors.purple200 },
  { key: 'Live', bulletColor: themeColors.blue100 },
];

export const Roadmap = () => {
  return (
    <FlexBoxColumn
      sx={{ gap: 6, px: 6, py: 5, backgroundColor: themeColors.white, borderRadius: '10px' }}
    >
      <FlexBoxRow justifyContent={'space-between'}>
        <Typography
          variant='medium-01-bold'
          sx={{
            color: themeColors.blue400,
          }}
        >
          Roadmap
        </Typography>
        <Typography
          variant='small-00-bold'
          sx={{ textDecoration: 'underline', color: themeColors.blue200 }}
        >
          View
        </Typography>
      </FlexBoxRow>
      <FlexBoxColumn gap={2}>
        {roadmapConfig.map((config) => (
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
              2
            </Typography>
          </FlexBoxRow>
        ))}
      </FlexBoxColumn>
    </FlexBoxColumn>
  );
};

