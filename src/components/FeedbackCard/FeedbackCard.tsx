import { FlexBoxRow } from '../FlexBox/FlexBoxRow';
import { themeColors } from '../../theme/colors';
import { Button, Skeleton, Typography } from '@mui/material';
import { FlexBoxColumn } from '../FlexBox/FlexBoxcolumn';
import { ReactComponent as ChevronUpIcon } from '../../assets/shared/icon-arrow-up.svg';
import { ReactComponent as CommentIcon } from '../../assets/shared/icon-comments.svg';
import { Product } from '../../store/products/products.types';
import { useNavigate } from 'react-router-dom';

interface FeedbackCardProps {
  product: Product;
}

export const FeedbackCard = ({ product }: FeedbackCardProps) => {
  const navigate = useNavigate();

  return (
    <FlexBoxRow
      onClick={() => navigate(`/${product.id}`)}
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

FeedbackCard.Skeleton = function FeedbackCardSkeleton() {
  return (
    <FlexBoxRow
      sx={{
        justifyContent: 'space-between',
        px: 8,
        py: 7,
        borderRadius: '10px',
        backgroundColor: themeColors.white,
        cursor: 'pointer',
        minHeight: '97px',
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
          <ChevronUpIcon />
          <Skeleton sx={{ width: '25px', height: '25px', bgcolor: themeColors.greyBlue300 }} />
        </Button>
        <FlexBoxColumn>
          <Skeleton sx={{ width: '150px', height: '30px', bgcolor: themeColors.greyBlue300 }} />
          <Skeleton
            sx={{
              width: '230px',
              height: '20px',
              bgcolor: themeColors.greyBlue300,
            }}
          />
          <Skeleton
            sx={{
              width: '75px',
              height: '56px',
              bgcolor: themeColors.greyBlue300,
              borderRadius: '10px',
            }}
          />
        </FlexBoxColumn>
      </FlexBoxRow>
      <FlexBoxRow alignItems={'center'} gap={2}>
        <CommentIcon />
        <Skeleton sx={{ width: '15px', height: '30px', bgcolor: themeColors.greyBlue300 }} />
      </FlexBoxRow>
    </FlexBoxRow>
  );
};

