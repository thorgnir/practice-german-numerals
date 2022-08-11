import React from 'react';

import { WordsToNumber } from '../WordsToNumber';
import { Box, ChakraProvider, Container, Flex, VStack } from '@chakra-ui/react';
import { History } from '../History';
import { RangeSelector } from '../RangeSelector';

function App() {
  return (
    <ChakraProvider>
      <Flex justifyContent={'flex-end'} w={'full'} px={2} paddingTop={2}>
        <RangeSelector />
      </Flex>
      <Container py={20} maxW={'full'}>
        {/*<Grid templateColumns={'3fr 2fr'} gap={10}>*/}
        {/*  <GridItem>*/}
        <Box>
          <VStack spacing={10}>
            <WordsToNumber />
            <History />
          </VStack>
        </Box>
        {/*  </GridItem>*/}
        {/*  <GridItem>*/}
        {/*    <Box>*/}
        {/*      */}
        {/*    </Box>*/}
        {/*  </GridItem>*/}
        {/*</Grid>*/}
      </Container>
    </ChakraProvider>
  );
}

export default App;
