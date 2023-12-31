import { useState } from 'react';
import { FlexBoxColumn } from '../FlexBox/FlexBoxcolumn';
import { Box, Chip, Typography } from '@mui/material';
import { FlexBoxRow } from '../FlexBox/FlexBoxRow';
import DesktopHeaderImg from '../../assets/suggestions/desktop/background-header.png';
import { themeColors } from '../../theme/colors';
import RoadmapSummary from './RoadmapSummary';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { filtersSelecter, setCategory } from '../../store/filters/filters.slice';
import { Category } from '../../store/feedbacks/feedbacks.types';

const filterConfig: Category[] = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

export const SideMenu = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector(filtersSelecter);

  const [slected, setSelected] = useState<Category>(filter || 'All');

  const handleFilterChipClick = (filter: Category) => {
    setSelected(filter);
    dispatch(setCategory(filter));
  };

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
            onClick={() => handleFilterChipClick(filter)}
            sx={{
              mb: '14px',
              ...(slected === filter && {
                background: themeColors.blue200,
                color: themeColors.white,
                '&:hover': {
                  background: themeColors.blue200,
                },
              }),
            }}
          />
        ))}
      </FlexBoxRow>
      <RoadmapSummary />
    </FlexBoxColumn>
  );
};

