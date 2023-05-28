import { FlexBoxColumn } from '../../components/FlexBox/FlexBoxcolumn';
import { FlexBoxRow } from '../../components/FlexBox/FlexBoxRow';
import { themeColors } from '../../theme/colors';
import { Box, Button, Typography } from '@mui/material';
import { ReactComponent as AddIcon } from '../../assets/shared/icon-new-feedback.svg';
import FeedbackInput from '../../components/FeedbackInput';
import { CategorySelect } from './CategorySelect/CategorySelect';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Feedback, categorySchema } from '../../store/feedbacks/feedbacks.types';
import { useAppDispatch } from '../../store/hooks';
import { addFeedback } from '../../store/feedbacks/feedbacks.slice';
import { zodResolver } from '@hookform/resolvers/zod';
import { GoBackButton } from '../../components/GoBackButton/GoBackButton';

const feedbackFormSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  category: categorySchema,
  description: z.string().min(1, { message: 'Detail is required' }),
});

export type FeedbackForm = z.infer<typeof feedbackFormSchema>;

export const AddFeedback = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const methods = useForm<FeedbackForm>({
    resolver: zodResolver(feedbackFormSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (formData: FeedbackForm) => {
    const newFeedback: Feedback = {
      id: crypto.randomUUID(),
      ...formData,
      upvotes: 0,
      status: 'suggestion',
      comments: [],
    };
    dispatch(addFeedback(newFeedback));
    navigate('/');
  };

  return (
    <FlexBoxColumn
      sx={{
        mx: 'auto',
        minWidth: '540px',
        gap: '45px',
      }}
    >
      <GoBackButton onClickGoBackBtn={() => navigate(-1)} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FlexBoxColumn
            sx={{
              position: 'relative',
              background: themeColors.white,
              px: 10,
              py: '50px',
              borderRadius: '10px',
              gap: '24px',
              mb: 5,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '-25px',
              }}
            >
              <AddIcon />
            </Box>
            <Typography
              variant='medium-03-bold'
              sx={{ textTransform: 'capitalize', color: themeColors.blue300, mb: 5 }}
            >
              create new feedback
            </Typography>
            <FeedbackInput
              label='Feedback Title'
              placeholder='Add a short, descriptive headline'
              type='text'
              register={register('title', { required: true })}
              error={errors.title && errors.title.message}
            />

            <CategorySelect
              label='Category'
              placeholder='Choose a category for your feedback'
              register={register('category', { required: true })}
              error={errors.category && errors.category.message}
            />
            <FeedbackInput
              label='Feedback Detail'
              placeholder='Include any specific comments on what should be improved, added, etc.'
              type='textarea'
              register={register('description', { required: true })}
              error={errors.description && errors.description.message}
            />

            <FlexBoxRow justifyContent={'flex-end'} gap={4} sx={{ width: '100%' }}>
              <Button
                fullWidth
                variant='contained'
                sx={{
                  bgcolor: themeColors.blue400,
                  color: themeColors.white,
                }}
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              <Button fullWidth variant='containdPurple' type='submit'>
                Add feedback
              </Button>
            </FlexBoxRow>
          </FlexBoxColumn>
        </form>
      </FormProvider>
    </FlexBoxColumn>
  );
};

