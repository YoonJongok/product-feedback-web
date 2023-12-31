import { useEffect, useMemo, useState } from 'react';
import { FlexBoxRow } from '../../../components/FlexBox/FlexBoxRow';
import { themeColors } from '../../../theme/colors';
import {
  Link as MuiLink,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Box,
} from '@mui/material';
import { ReactComponent as SuggestionIcon } from '../../../assets/suggestions/icon-suggestions.svg';
import { ReactComponent as CheckIcon } from '../../../assets/shared/icon-check.svg';
import { ReactComponent as NoFeedbackImg } from '../../../assets/suggestions/illustration-empty.svg';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchFeedbacks, feedbacksSelector } from '../../../store/feedbacks/feedbacks.slice';
import { FeedbackCard } from '../../../components/FeedbackCard/FeedbackCard';
import { filtersSelecter, setSortBy } from '../../../store/filters/filters.slice';
import { filterFeedbacks } from './ListFeedbacks.helpers';
import { sortByConfig } from './ListFeedbacks.config';
import { SortBy } from '../../../store/filters/filters.types';
import { Link } from 'react-router-dom';
import AddFeedbackButton from '../../../components/AddFeedbackButton';
import { FlexBoxColumn } from '../../../components/FlexBox/FlexBoxcolumn';

export const ListFeedbacks = () => {
  const [selectedSort, setSelectedSort] = useState<SortBy>(sortByConfig[0]);

  const dispatch = useAppDispatch();

  const { status, feedbacks } = useAppSelector(feedbacksSelector);
  const { filter, sortBy } = useAppSelector(filtersSelecter);

  const isLoading = status === 'loading' || status === 'idle';
  const isSuccess = status === 'succeeded' && feedbacks;

  const filteredFeedbacks = useMemo(() => {
    return isSuccess && filterFeedbacks(feedbacks, filter, sortBy);
  }, [feedbacks, filter, status, sortBy]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedSort = event.target.value as SortBy;
    setSelectedSort(selectedSort);
    dispatch(setSortBy(selectedSort));
  };

  useEffect(() => {
    dispatch(fetchFeedbacks());
  }, []);

  return (
    <>
      <FlexBoxRow
        sx={{
          backgroundColor: themeColors.blue400,
          px: 6,
          py: 5,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '10px',
        }}
      >
        <FlexBoxRow sx={{ alignItems: 'center', gap: '38px' }}>
          <FlexBoxRow sx={{ gap: '18px' }}>
            <SuggestionIcon style={{ fill: themeColors.white }} />
            <Typography variant='medium-02-bold' sx={{ color: themeColors.white }}>
              {filteredFeedbacks ? filteredFeedbacks.length : 0} Suggestions
            </Typography>
          </FlexBoxRow>
          <Select
            disableUnderline
            displayEmpty
            value={selectedSort}
            onChange={handleChange}
            variant='standard'
            renderValue={(selected) => (
              <Typography
                variant='small-01-light'
                sx={{ display: 'flex', alignItems: 'center', color: themeColors.white, gap: 3 }}
              >
                Sort by: <Typography variant='small-01-bold'>{selected}</Typography>
              </Typography>
            )}
            MenuProps={{
              PaperProps: {
                style: {
                  width: '255px',
                },
              },
            }}
            sx={{
              width: '250px',
              boxShadow: 'none',
              '.MuiOutlinedInput-notchedOutline': { border: 0 },
              '& > svg': { color: themeColors.white },
            }}
          >
            {sortByConfig.map((sortType) => (
              <MenuItem
                key={sortType}
                value={sortType}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color:
                    selectedSort === sortType ? themeColors.purple200 : themeColors.greyBlue400,
                }}
              >
                {sortType} {selectedSort === sortType && <CheckIcon />}
              </MenuItem>
            ))}
          </Select>
        </FlexBoxRow>
        <AddFeedbackButton />
      </FlexBoxRow>
      {isLoading && [0, 1, 2].map((_, index) => <FeedbackCard.Skeleton key={index} />)}
      {filteredFeedbacks && filteredFeedbacks.length === 0 && (
        <FlexBoxColumn
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: themeColors.white,
            py: '100px',
            px: '210px',
            textAlign: 'center',
          }}
        >
          <NoFeedbackImg />
          <FlexBoxColumn sx={{ gap: 4, my: 8 }}>
            <Typography variant='medium-02-bold' sx={{ color: themeColors.blue400 }}>
              There is no feedback yet.
            </Typography>
            <Typography variant='medium-00-regular' sx={{ color: themeColors.blue400 }}>
              Got a suggestion? Found a bug that needs to be squashed? We love hearing about new
              ideas to improve our app.
            </Typography>
          </FlexBoxColumn>
          <AddFeedbackButton />
        </FlexBoxColumn>
      )}
      {filteredFeedbacks &&
        filteredFeedbacks.map((feedback, index) => (
          <MuiLink key={index} component={Link} to={`/${feedback.id}`}>
            <FeedbackCard feedback={feedback} />
          </MuiLink>
        ))}
    </>
  );
};

