import { Box, BoxProps } from '@mui/material';
import React from 'react';

export const FlexBoxRow = ({ children, ...boxProps }: React.PropsWithChildren<BoxProps>) => {
  return (
    <Box
      {...boxProps}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        ...boxProps.sx,
      }}
    >
      {children}
    </Box>
  );
};

