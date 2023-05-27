import { Input, Typography } from '@mui/material';
import { FlexBoxColumn } from '../FlexBox/FlexBoxcolumn';
import { themeColors } from '../../theme/colors';
import { UseFormRegisterReturn } from 'react-hook-form';

interface FeedbackInputProps {
  label: string;
  placeholder: string;
  type: 'text' | 'textarea';
  register: UseFormRegisterReturn;
}

export const FeedbackInput = ({ label, placeholder, type, register }: FeedbackInputProps) => {
  return (
    <FlexBoxColumn alignItems={'flex-start'}>
      <Typography variant='small-02-bold' color={themeColors.blue300}>
        {label}
      </Typography>
      <Typography variant='small-01-regular' color={themeColors.blue300} mb={3}>
        {placeholder}
      </Typography>

      <Input
        {...register}
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

