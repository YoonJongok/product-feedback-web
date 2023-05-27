import React, { useState } from 'react';
import { themeColors } from '../../../theme/colors';
import { Filter } from '../../../store/filters/filters.types';
import { ReactComponent as CheckIcon } from '../../../assets/shared/icon-check.svg';
import { FlexBoxColumn } from '../../../components/FlexBox/FlexBoxcolumn';
import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';

export const categoryConfig: Filter[] = ['UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

interface CategorySelectProps {
  label: string;
  placeholder: string;
}

export const CategorySelect = ({ label, placeholder }: CategorySelectProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Filter>(categoryConfig[0]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    // const selectedSort = event.target.value as SortBy;
    // setSelectedSort(selectedSort);
    // dispatch(setSortBy(selectedSort));
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
        fullWidth
        disableUnderline
        displayEmpty
        value={selectedCategory}
        onChange={handleChange}
        variant='standard'
        renderValue={(selected) => (
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: themeColors.blue400,
              gap: 3,
              bgcolor: themeColors.greyBlue100,
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
          '& .MuiSelect-select': {
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
