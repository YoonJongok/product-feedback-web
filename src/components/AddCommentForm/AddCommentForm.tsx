import { Button, Input, Typography } from '@mui/material';
import { themeColors } from '../../theme/colors';
import { FlexBoxRow } from '../FlexBox/FlexBoxRow';
import { useState } from 'react';

const charLimit = 250;

export const AddCommentForm = () => {
  const [coundLimit, setCountLimit] = useState(charLimit);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCountLimit(charLimit - e.target.value.length);
  };

  return (
    <form>
      <Input
        // {...register}
        inputProps={{ maxLength: 250 }}
        disableUnderline
        fullWidth
        multiline
        placeholder='Type your comment here'
        sx={{
          minHeight: 80,
          bgcolor: themeColors.greyBlue100,
          borderRadius: '5px',
          px: 5,
        }}
        onChange={(e) => handleFormChange(e)}
      />

      <FlexBoxRow sx={{ justifyContent: 'space-between', alignItems: 'center', mt: '16px' }}>
        <Typography variant='small-01-regular' color={themeColors.blue300}>
          {coundLimit} Characters left
        </Typography>
        <Button variant='containdPurple'>post comment</Button>
      </FlexBoxRow>
    </form>
  );
};

