import React from 'react';
import { FlexBoxColumn } from '../../components/FlexBox/FlexBoxcolumn';
import RoadmapHeader from './RoadmapHeader';

export const Roadmap = () => {
  return (
    <FlexBoxColumn sx={{ mx: 'auto', minWidth: '1110px' }}>
      <RoadmapHeader />
    </FlexBoxColumn>
  );
};

