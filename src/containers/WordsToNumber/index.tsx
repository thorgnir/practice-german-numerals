import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

import React, { KeyboardEvent, useMemo } from 'react';

import {
  Box,
  HStack,
  IconButton,
  NumberInput,
  NumberInputField,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export const WordsToNumber = observer(() => {
  const { numbersStore } = useStore();

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      handleCheck();
    }
  };

  const handleCheck = () => {
    numbersStore.checkCurrentNumber();
  };

  function handleNumberChange(valueAsString: string) {
    numbersStore.setCurrentInputValue(valueAsString);
  }

  const focusBorderColor: string = useMemo(
    () => (numbersStore.invalid ? 'red.500' : 'blue.500'),
    [numbersStore.invalid]
  );

  return (
    <VStack spacing={8}>
      <Box>
        <Text fontSize={'xl'}>{numbersStore.currentNumberAsText}</Text>
      </Box>
      <Box>
        <HStack spacing={2}>
          <NumberInput
            onChange={handleNumberChange}
            onKeyDown={handleKeyPress}
            value={numbersStore.currentInputValue}
            isInvalid={numbersStore.invalid}
            focusBorderColor={focusBorderColor}
          >
            <NumberInputField
              placeholder={`${numbersStore.currentRange.min} - ${numbersStore.currentRange.max}`}
            />
          </NumberInput>
          <IconButton
            aria-label={'Check'}
            icon={<CheckIcon />}
            onClick={handleCheck}
          />
        </HStack>
      </Box>
    </VStack>
  );
});
