import { Button, Input, Typography } from '@mui/material';
import { themeColors } from '../../theme/colors';
import { FlexBoxRow } from '../FlexBox/FlexBoxRow';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useParams } from 'react-router-dom';
import { Comment } from '../../store/feedbacks/feedbacks.types';
import { useAppDispatch } from '../../store/hooks';
import { addCommentOnFeedback } from '../../store/feedbacks/feedbacks.slice';

const charLimit = 250;

const addCommetnFormSchema = z.object({
  comment: z.string().min(1, { message: 'Comment is required to submit' }),
});

type AddCommentForm = z.infer<typeof addCommetnFormSchema>;

export const AddCommentForm = () => {
  const dispatch = useAppDispatch();
  const { id: feedbackId } = useParams() as { id: string };
  const [coundLimit, setCountLimit] = useState(charLimit);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCommentForm>();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCountLimit(charLimit - e.target.value.length);
  };

  const handleFormSubmit = ({ comment }: AddCommentForm) => {
    console.log({ comment });
    const newComment: Comment = {
      id: Math.floor(Math.random() * 1000000),
      feedbackId: +feedbackId,
      content: comment,
      user: {
        username: 'John Doe',
        name: 'John Doe',
        image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 100)}}`,
      },
    };

    dispatch(addCommentOnFeedback(newComment));
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        {...register('comment', { required: true })}
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
      {errors.comment && (
        <Typography variant='small-01-regular' color={themeColors.red}>
          {errors.comment.message}
        </Typography>
      )}

      <FlexBoxRow sx={{ justifyContent: 'space-between', alignItems: 'center', mt: '16px' }}>
        <Typography variant='small-01-regular' color={themeColors.blue300}>
          {coundLimit} Characters left
        </Typography>
        <Button type='submit' variant='containdPurple'>
          post comment
        </Button>
      </FlexBoxRow>
    </form>
  );
};

