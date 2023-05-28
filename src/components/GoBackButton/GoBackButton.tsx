import { FlexBoxRow } from '../FlexBox/FlexBoxRow';
import { Typography } from '@mui/material';
import { themeColors } from '../../theme/colors';
import { ReactComponent as ChevronLeftIcon } from '../../assets/shared/icon-arrow-left.svg';

interface GoBackButtonProps {
  onClickGoBackBtn: () => void;
}

export const GoBackButton = ({ onClickGoBackBtn }: GoBackButtonProps) => {
  return (
    <FlexBoxRow
      sx={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '15px',
        cursor: 'pointer',
      }}
      onClick={() => onClickGoBackBtn()}
    >
      <ChevronLeftIcon style={{ fill: themeColors.blue400 }} />
      <Typography
        variant='small-01-bold'
        sx={{ textTransform: 'capitalize', color: themeColors.greyBlue400, pt: '3px' }}
      >
        Go back
      </Typography>
    </FlexBoxRow>
  );
};

