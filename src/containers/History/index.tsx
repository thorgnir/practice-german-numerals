import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Box, Stack } from '@mui/material';
import { HistoryItem } from './HistoryItem';
import { IHistoryItem } from '../../stores/history';

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
