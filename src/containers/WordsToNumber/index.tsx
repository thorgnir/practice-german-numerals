import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import {
  Box,
  Container,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import React, { ChangeEvent, KeyboardEvent } from 'react';
import { History } from '../History';

export const WordsToNumber = observer(() => {
  const { numbersStore } = useStore();

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      handleCheck();
    }
  };

  const handleTextFieldChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    numbersStore.setCurrentInputValue(e.target.value);
  };

  const handleCheck = () => {
    numbersStore.checkCurrentNumber();
  };

  return (
    <Container>
      <Box>
        {/*{numbersStore.currentNumber}*/}
        <br />
        <Typography variant="h5" sx={{ wordWrap: 'break-word' }}>
          {numbersStore.currentNumberAsText}
        </Typography>
        <TextField
          type="number"
          size="small"
          onKeyDown={handleKeyPress}
          onChange={handleTextFieldChange}
          value={numbersStore.currentInputValue}
        />
        <IconButton onClick={handleCheck}>
          <CheckIcon />
        </IconButton>
      </Box>
      <Box>
        <History />
      </Box>
    </Container>
  );
});
