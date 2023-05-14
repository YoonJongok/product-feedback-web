import { useState } from 'react';
import { FlexBoxColumn } from './FlexBox/FlexBoxcolumn';
import { Box, Chip, Typography } from '@mui/material';
import { FlexBoxRow } from './FlexBox/FlexBoxRow';
import DesktopHeaderImg from '../assets/suggestions/desktop/background-header.png';

import { themeColors } from '../theme/colors';

const filterConfig = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
const roadmapConfig = [
  { key: 'Planned', bulletColor: themeColors.coral },
  { key: 'In-Progress', bulletColor: themeColors.purple200 },
  { key: 'Live', bulletColor: themeColors.blue100 },
];

export const SideMenu = () => {
  const [slected, setSelected] = useState('All');
  return (
    <FlexBoxColumn sx={{ gap: 6 }}>
      <FlexBoxColumn
        sx={{
          position: 'relative',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          pt: '62px',
          px: 6,
          pb: 6,
        }}
      >
        <Box
          component='img'
          sx={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            borderRadius: '10px',
          }}
          alt='The house from the offer.'
          src={DesktopHeaderImg}
        />

        <Typography
          variant='medium-02-bold'
          sx={{ zIndex: 10, textTransform: 'capitalize', color: themeColors.white }}
        >
          frontend mentor
        </Typography>

        <Typography
          variant='small-02-regular'
          sx={{ zIndex: 10, textTransform: 'capitalize', color: themeColors.white }}
        >
          Feedback board
        </Typography>
      </FlexBoxColumn>

      <FlexBoxRow
        sx={{
          flexWrap: 'wrap',
          gap: 2,
          backgroundColor: themeColors.white,
          p: 6,
          borderRadius: '10px',
        }}
      >
        {filterConfig.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            variant='filled'
            sx={{
              mb: '14px',
              ...(slected === filter && {
                background: themeColors.blue200,
                color: themeColors.white,
              }),
            }}
          />
        ))}
      </FlexBoxRow>
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
                  color={themeColors.greyBlue300}
                  sx={{
                    lineHeight: '0px',
                    fontSize: '16px',
                  }}
                >
                  {config.key}
                </Typography>
              </FlexBoxRow>
              <Typography variant='medium-00-bold' color={themeColors.greyBlue300}>
                2
              </Typography>
            </FlexBoxRow>
          ))}
        </FlexBoxColumn>
      </FlexBoxColumn>
    </FlexBoxColumn>
  );
};

