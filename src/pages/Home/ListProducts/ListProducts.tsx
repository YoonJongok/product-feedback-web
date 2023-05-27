import { useEffect, useMemo, useState } from 'react';
import { FlexBoxRow } from '../../../components/FlexBox/FlexBoxRow';
import { themeColors } from '../../../theme/colors';
import { Button, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { ReactComponent as SuggestionIcon } from '../../../assets/suggestions/icon-suggestions.svg';
import { ReactComponent as CheckIcon } from '../../../assets/shared/icon-check.svg';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchProducts, productsSelector } from '../../../store/products/products.slice';
import { FeedbackCard } from '../../../components/FeedbackCard/FeedbackCard';
import { filtersSelecter, setSortBy } from '../../../store/filters/filters.slice';
import { filterProducts } from './ListProducts.helpers';
import { sortByConfig } from './ListProducts.config';
import { SortBy } from '../../../store/filters/filters.types';
import { useNavigate } from 'react-router-dom';

export const ListProducts = () => {
  const [selectedSort, setSelectedSort] = useState<SortBy>(sortByConfig[0]);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { status, products } = useAppSelector(productsSelector);
  const { filter, sortBy } = useAppSelector(filtersSelecter);

  const isLoading = status === 'loading' || status === 'idle';
  const isSuccess = status === 'succeeded' && products;

  const filteredProducts = useMemo(() => {
    return isSuccess && filterProducts(products, filter, sortBy);
  }, [products, filter, status, sortBy]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedSort = event.target.value as SortBy;
    setSelectedSort(selectedSort);
    dispatch(setSortBy(selectedSort));
  };

  useEffect(() => {
    dispatch(fetchProducts());
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
              5 Suggestions
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
        <Button variant='containdPurple' onClick={() => navigate('/add')}>
          Add Feedback
        </Button>
      </FlexBoxRow>
      {isLoading && [0, 1, 2].map((_, index) => <FeedbackCard.Skeleton key={index} />)}
      {filteredProducts &&
        filteredProducts.map((product, index) => <FeedbackCard key={index} product={product} />)}
    </>
  );
};

