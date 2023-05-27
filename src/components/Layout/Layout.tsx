import { FlexBoxColumn } from '../FlexBox/FlexBoxcolumn';
import { Outlet } from 'react-router-dom';
import { themeColors } from '../../theme/colors';

export const Layout = () => {
  return (
    <FlexBoxColumn
      sx={{
        minHeight: '100vh',
        backgroundColor: themeColors.greyBlue200,
      }}
    >
      <FlexBoxColumn sx={{ py: 10 }}>
        <Outlet />
      </FlexBoxColumn>
    </FlexBoxColumn>
  );
};

