import React from 'react';
import {Box, VStack, Text} from '@chakra-ui/react';
import Header from './components/Header';
import CsvParser from './components/CsvParser';

function App() {
  return (
    <>
      <VStack align="stretch" spacing="8">
        <Box>
          <Header />
        </Box>
        <Box>
          <CsvParser />
        </Box>
        <Box></Box>
      </VStack>
    </>
  );
}

export default App;
