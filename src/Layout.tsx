import React from 'react';
import { FlexBoxColumn } from './components/FlexBox/FlexBoxcolumn';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <FlexBoxColumn
      sx={{
        height: '100%',
        minHeight: '100vh',
        py: '50px',
      }}
    >
      <Outlet />
      {children}
    </FlexBoxColumn>
  );
};

