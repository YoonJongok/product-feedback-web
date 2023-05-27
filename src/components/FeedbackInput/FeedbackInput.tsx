import { Input, Typography } from '@mui/material';
import { FlexBoxColumn } from '../FlexBox/FlexBoxcolumn';
import { themeColors } from '../../theme/colors';

interface FeedbackInputProps {
  label: string;
  placeholder: string;
  type: 'text' | 'textarea';
}

export const FeedbackInput = ({ label, placeholder, type }: FeedbackInputProps) => {
  return (
    <FlexBoxColumn alignItems={'flex-start'}>
      <Typography variant='small-02-bold' color={themeColors.blue300}>
        {label}
      </Typography>
      <Typography variant='small-01-regular' color={themeColors.blue300} mb={3}>
        {placeholder}
      </Typography>

      <Input
        disableUnderline
        fullWidth
        multiline={type === 'textarea'}
        sx={{
          minHeight: type === 'textarea' ? 80 : 48,
          bgcolor: themeColors.greyBlue100,
          borderRadius: '5px',
          px: 5,
        }}
      />
    </FlexBoxColumn>
  );
};

