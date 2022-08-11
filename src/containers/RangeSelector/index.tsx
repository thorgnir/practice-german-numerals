import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Box, Select } from '@chakra-ui/react';
import { NumberRanges, NumberRangeType } from '../../constants/ranges';

export const RangeSelector = observer(() => {
  const { numbersStore } = useStore();
  const rangeOptions = Object.keys(NumberRanges).map((key) => {
    const range = NumberRanges[key as unknown as NumberRangeType];
    return {
      label: `${range.min} - ${range.max}`,
      value: key,
    };
  });

  function handleChangeRange(event: React.ChangeEvent<HTMLSelectElement>) {
    const range =
      NumberRanges[event.target.value as unknown as NumberRangeType];
    numbersStore.setRange(range);
  }

  return (
    <Box>
      <Select onChange={handleChangeRange}>
        {rangeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </Box>
  );
});
