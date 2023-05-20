import React from 'react';
import { FlexBoxRow } from '../FlexBox/FlexBoxRow';
import { themeColors } from '../../theme/colors';
import { Button, Typography } from '@mui/material';
import { FlexBoxColumn } from '../FlexBox/FlexBoxcolumn';
import { ReactComponent as ChevronUpIcon } from '../../assets/shared/icon-arrow-up.svg';
import { ReactComponent as CommentIcon } from '../../assets/shared/icon-comments.svg';
import { Product } from '../../store/products/products.types';

interface FeedbackCardProps {
  product: Product;
}

export const FeedbackCard = ({ product }: FeedbackCardProps) => {
  return (
    <FlexBoxRow
      sx={{
        justifyContent: 'space-between',
        px: 8,
        py: 7,
        borderRadius: '10px',
        backgroundColor: themeColors.white,
        cursor: 'pointer',
      }}
    >
      <FlexBoxRow justifyContent={'flex-start'} alignItems={'flex-start'} gap={10}>
        <Button
          variant='vote'
          color='primary'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <ChevronUpIcon /> {product.upvotes}
        </Button>
        <FlexBoxColumn>
          <Typography variant='medium-01-bold' sx={{ color: themeColors.blue300 }}>
            {product.title}
          </Typography>
          <Typography variant='medium-00-regular' sx={{ color: themeColors.greyBlue400 }}>
            {product.description}
          </Typography>
          <Button
            variant='contained'
            color='primary'
            sx={{ color: themeColors.blue200, padding: '6px 16px', mt: 3, fontWeight: 500 }}
          >
            {product.category}
          </Button>
        </FlexBoxColumn>
      </FlexBoxRow>
      <FlexBoxRow alignItems={'center'} gap={2}>
        <CommentIcon />
        <Typography variant='medium-01-bold' sx={{ color: themeColors.greyBlue400, pt: '3px' }}>
          {product.comments && !!product.comments.length ? product.comments.length : 0}
        </Typography>
      </FlexBoxRow>
    </FlexBoxRow>
  );
};

