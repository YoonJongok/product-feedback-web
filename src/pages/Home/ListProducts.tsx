import { useEffect, useMemo, useState } from 'react';
import { FlexBoxRow } from '../../components/FlexBox/FlexBoxRow';
import { themeColors } from '../../theme/colors';
import {
  Button,
  CircularProgress,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { ReactComponent as SuggestionIcon } from '../../assets/suggestions/icon-suggestions.svg';
import { ReactComponent as CheckIcon } from '../../assets/shared/icon-check.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchProducts, productsSelector } from '../../store/products/products.slice';
import { FeedbackCard } from '../../components/Feedback/FeedbackCard';
import { filtersSelecter } from '../../store/filters/filters.slice';
import { Product } from '../../store/products/products.types';
import { Filter } from '../../store/filters/filters.types';

const sortByConfig = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];

export const filterProducts = (products: Product[], filter: Filter = 'All') => {
  console.log('filterProducts', filter);
  if (!products || products.length === 0) return [];

  if (filter === 'All') return products;

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === filter.toLowerCase()
  );

  return filteredProducts.length === 0 ? [] : filteredProducts;
};

export const ListProducts = () => {
  const dispatch = useAppDispatch();

  // TODO: error handling with toast
  const { status, error, products } = useAppSelector(productsSelector);
  const { filter } = useAppSelector(filtersSelecter);

  const isLoading = status === 'loading' || status === 'idle';
  const isSuccess = status === 'succeeded' && products;

  const filteredProducts = useMemo(() => {
    return isSuccess && filterProducts(products, filter);
  }, [products, filter, status]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [selectedSort, setSelectedSort] = useState<string>(sortByConfig[0]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedSort(event.target.value as string);
  };

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
            displayEmpty
            value={selectedSort}
            onChange={handleChange}
            input={<OutlinedInput />}
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
        <Button variant='containdPurple'>Add Feedback</Button>
      </FlexBoxRow>
      {isLoading && (
        <FlexBoxRow justifyContent={'center'}>
          <CircularProgress />
        </FlexBoxRow>
      )}
      {filteredProducts &&
        filteredProducts.map((product, index) => <FeedbackCard key={index} product={product} />)}
    </>
  );
};

