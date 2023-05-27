import React from 'react';
import { FlexBoxColumn } from '../FlexBox/FlexBoxcolumn';
import { Outlet } from 'react-router-dom';
import { themeColors } from '../../theme/colors';

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <FlexBoxColumn
      sx={{
        minHeight: '100vh',
        backgroundColor: themeColors.greyBlue200,
      }}
    >
      <Outlet />
      {children}
    </FlexBoxColumn>
  );
};

