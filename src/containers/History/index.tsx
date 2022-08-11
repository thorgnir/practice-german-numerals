import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { HistoryItem } from './HistoryItem';
import { IHistoryItem } from '../../stores/history';
import { Box, Stack } from '@chakra-ui/react';

export const History = observer(() => {
  const { historyStore } = useStore();

  return (
    <Box>
      <Stack direction="column-reverse">
        {historyStore.history.map((hi: IHistoryItem, idx: number) => (
          <HistoryItem value={hi} key={idx} />
        ))}
      </Stack>
    </Box>
  );
});
