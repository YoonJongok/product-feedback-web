import { useState } from 'react';
import { themeColors } from '../../../theme/colors';
import { ReactComponent as CheckIcon } from '../../../assets/shared/icon-check.svg';
import { ReactComponent as ChevronDownIcon } from '../../../assets/shared/icon-arrow-down.svg';
import { FlexBoxColumn } from '../../../components/FlexBox/FlexBoxcolumn';
import { Box, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { UseFormRegisterReturn, useFormContext } from 'react-hook-form';
import { Category } from '../../../store/products/products.types';
import { FeedbackForm } from '../AddFeedback';

export const categoryConfig: Category[] = ['UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

interface CategorySelectProps {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

export const CategorySelect = ({ label, placeholder, register }: CategorySelectProps) => {
  const { setValue } = useFormContext<FeedbackForm>();

  const [selectedCategory, setSelectedCategory] = useState<Category>(categoryConfig[0]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedCategory = event.target.value as Category;
    setSelectedCategory(selectedCategory);
    setValue('category', selectedCategory);
  };

  return (
    <FlexBoxColumn alignItems={'flex-start'}>
      <Typography variant='small-02-bold' color={themeColors.blue300}>
        {label}
      </Typography>
      <Typography variant='small-01-regular' color={themeColors.blue300} mb={3}>
        {placeholder}
      </Typography>
      <Select
        {...register}
        fullWidth
        disableUnderline
        displayEmpty
        value={selectedCategory}
        onChange={handleChange}
        variant='standard'
        IconComponent={ArrowDownIcon}
        renderValue={(selected) => (
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: themeColors.blue400,
              gap: 3,
              // bgcolor: themeColors.greyBlue100,
            }}
          >
            {selected}
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
          minHeight: 48,
          bgcolor: themeColors.greyBlue100,
          borderRadius: '5px',
          px: 5,
          '& div:focus': {
            bgcolor: themeColors.greyBlue100,
          },
        }}
      >
        {categoryConfig.map((category) => (
          <MenuItem
            key={category}
            value={category}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color:
                selectedCategory === category ? themeColors.purple200 : themeColors.greyBlue400,
            }}
          >
            {category} {selectedCategory === category && <CheckIcon />}
          </MenuItem>
        ))}
      </Select>
    </FlexBoxColumn>
  );
};

export const ArrowDownIcon = () => {
  return (
    <Box>
      <ChevronDownIcon />
    </Box>
  );
};

