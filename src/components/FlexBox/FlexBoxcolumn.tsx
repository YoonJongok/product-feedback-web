import { Box, BoxProps } from '@mui/material';
import React from 'react';

export const FlexBoxColumn = ({ children, ...boxProps }: React.PropsWithChildren<BoxProps>) => {
  return (
    <Box
      {...boxProps}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ...boxProps.sx,
      }}
    >
      {children}
    </Box>
  );
};

