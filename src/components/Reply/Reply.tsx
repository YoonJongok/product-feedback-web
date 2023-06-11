import { FlexBoxRow } from '../FlexBox/FlexBoxRow';
import { themeColors } from '../../theme/colors';
import { FlexBoxColumn } from '../FlexBox/FlexBoxcolumn';
import { Box, Typography } from '@mui/material';
import { Reply as ReplyType } from '../../store/feedbacks/feedbacks.types';

interface ReplyProps {
  username: string;
  reply: ReplyType;
}

export const Reply = ({ username, reply }: ReplyProps) => {
  return (
    <FlexBoxRow
      sx={{
        justifyContent: 'flex-start',
        py: 8,
        gap: 8,
        '&:not(:last-child)': {
          borderBottom: `solid 2px ${themeColors.greyBlue200}`,
        },
      }}
    >
      <Box
        component='img'
        sx={{
          height: 40,
          width: 40,
          borderRadius: '50%',
        }}
        src={reply.user.image}
        alt={reply.user.name}
      />
      <FlexBoxColumn sx={{ width: '100%', gap: '17px' }}>
        <FlexBoxRow sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <FlexBoxColumn>
            <Typography variant='small-01-bold'>{reply.user.name}</Typography>
            <Typography variant='small-01-regular' color={themeColors.greyBlue400}>
              @{reply.user.username}
            </Typography>
          </FlexBoxColumn>
          <Typography
            variant='small-01-regular'
            sx={{ fontWeight: 600, color: themeColors.blue200, cursor: 'pointer' }}
          >
            Reply
          </Typography>
        </FlexBoxRow>
        <FlexBoxRow sx={{ alignItems: 'center', gap: '4px' }}>
          <Typography variant='small-01-bold' color={themeColors.purple200}>
            @{username}
          </Typography>
          <Typography variant='small-01-regular' color={themeColors.greyBlue400}>
            {reply.content}
          </Typography>
        </FlexBoxRow>
      </FlexBoxColumn>
    </FlexBoxRow>
  );
};

