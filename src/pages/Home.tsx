import Grid from '@mui/material/Unstable_Grid2';
import { SideMenu } from '../components/SideMenu';
import { FlexBoxRow } from '../components/FlexBox/FlexBoxRow';
import { themeColors } from '../theme/colors';
import { ReactComponent as SuggestionIcon } from '../assets/suggestions/icon-suggestions.svg';
import { ReactComponent as CheckIcon } from '../assets/shared/icon-check.svg';
import {
  Button,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProducts, productsSelector } from '../store/products/products.slice';
import { FeedbackCard } from '../components/Feedback/FeedbackCard';

const sortByConfig = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];

export const Home = () => {
  const dispatch = useAppDispatch();

  const [selectedSort, setSelectedSort] = useState<string>(sortByConfig[0]);

  const { status, error, products } = useAppSelector(productsSelector);

  const loading = status === 'loading' || status === 'idle';
  const isSuccess = status === 'succeeded' && products;

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedSort(event.target.value as string);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Grid
      container
      spacing={'30px'}
      sx={{
        px: { tablet: '50px', desktop: '100px' },
      }}
    >
      <Grid desktop={3}>
        <SideMenu />
      </Grid>
      <Grid
        desktop={9}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
        }}
      >
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
        {isSuccess &&
          products.map((product, index) => <FeedbackCard key={index} product={product} />)}
      </Grid>
    </Grid>
  );
};

