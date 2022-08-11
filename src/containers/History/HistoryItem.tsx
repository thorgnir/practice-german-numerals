import React from 'react';
import { IHistoryItem } from '../../stores/history';
import { Box, Text } from '@chakra-ui/react';

interface Props {
  value: IHistoryItem;
}

export const HistoryItem: React.FC<Props> = ({ value }) => {
  return (
    <Box>
      <Text fontSize={'md'}>
        {value.question} - {value.answer}
      </Text>
    </Box>
  );
};
