import { FlexBoxColumn } from '../../FlexBox/FlexBoxcolumn';
import { FlexBoxRow } from '../../FlexBox/FlexBoxRow';
import { Box, Typography } from '@mui/material';
import { themeColors } from '../../../theme/colors';
import { Product, Status } from '../../../store/products/products.types';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchProducts, productsSelector } from '../../../store/products/products.slice';
import { useEffect } from 'react';

export type RoadmapConfig = { key: Status; bulletColor: string; numOfStatus: number };

const roadmapConfig: RoadmapConfig[] = [
  { key: 'planned', bulletColor: themeColors.coral, numOfStatus: 0 },
  { key: 'in-progress', bulletColor: themeColors.purple200, numOfStatus: 0 },
  { key: 'live', bulletColor: themeColors.blue100, numOfStatus: 0 },
  { key: 'suggestion', bulletColor: themeColors.greyBlue400, numOfStatus: 0 },
];

const getRoadmapStatuses = (products: Product[]) => {
  if (!products || products.length === 0) return roadmapConfig;

  const roadmapStatuses = roadmapConfig.map((config) => {
    const { key } = config;
    const numOfStatus = products.filter((product) => product.status === key).length;
    return { ...config, numOfStatus };
  });

  return roadmapStatuses;
};

export const Roadmap = () => {
  const dispatch = useAppDispatch();

  const { status, error, products } = useAppSelector(productsSelector);

  const isLoading = status === 'loading' || status === 'idle';
  const isSuccess = status === 'succeeded' && products;

  const roadmapStatuses = isSuccess && getRoadmapStatuses(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <FlexBoxColumn
      sx={{ gap: 6, px: 6, py: 5, backgroundColor: themeColors.white, borderRadius: '10px' }}
    >
      <FlexBoxRow justifyContent={'space-between'}>
        <Typography
          variant='medium-01-bold'
          sx={{
            color: themeColors.blue400,
          }}
        >
          Roadmap
        </Typography>
        <Typography
          variant='small-00-bold'
          sx={{ textDecoration: 'underline', color: themeColors.blue200 }}
        >
          View
        </Typography>
      </FlexBoxRow>
      <FlexBoxColumn gap={2}>
        {roadmapConfig.map((config) => (
          <FlexBoxRow key={config.key} justifyContent={'space-between'} alignItems={'center'}>
            <FlexBoxRow sx={{ gap: 4, alignItems: 'center' }}>
              <Box
                sx={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: config.bulletColor,
                }}
              ></Box>
              <Typography
                color={themeColors.greyBlue400}
                sx={{
                  lineHeight: '0px',
                  fontSize: '16px',
                }}
              >
                {config.key}
              </Typography>
            </FlexBoxRow>
            <Typography variant='medium-00-bold' color={themeColors.greyBlue400}>
              2
            </Typography>
          </FlexBoxRow>
        ))}
      </FlexBoxColumn>
    </FlexBoxColumn>
  );
};

