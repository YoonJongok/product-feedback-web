import { FlexBoxRow } from '../FlexBox/FlexBoxRow';
import { themeColors } from '../../theme/colors';
import { FlexBoxColumn } from '../FlexBox/FlexBoxcolumn';
import { Box, Typography } from '@mui/material';
import { Comment as CommentType } from '../../store/feedbacks/feedbacks.types';
import Reply from '../Reply';

interface CommentProps {
  comment: CommentType;
}

export const Comment = ({ comment }: CommentProps) => {
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
        src={comment.user.image}
        alt={comment.user.name}
      />
      <FlexBoxColumn sx={{ width: '100%', gap: '17px' }}>
        <FlexBoxRow sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <FlexBoxColumn>
            <Typography variant='small-01-bold'>{comment.user.name}</Typography>
            <Typography variant='small-01-regular' color={themeColors.greyBlue400}>
              @{comment.user.username}
            </Typography>
          </FlexBoxColumn>
          <Typography
            variant='small-01-regular'
            sx={{ fontWeight: 600, color: themeColors.blue200, cursor: 'pointer' }}
          >
            Reply
          </Typography>
        </FlexBoxRow>
        <Typography variant='small-01-regular' color={themeColors.greyBlue400}>
          {comment.content}
        </Typography>
        {comment.replies &&
          comment.replies?.map((reply) => (
            <Reply key={crypto.randomUUID()} username={comment.user.username} reply={reply} />
          ))}
      </FlexBoxColumn>
    </FlexBoxRow>
  );
};

