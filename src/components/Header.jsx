import {Box, Center, Text} from '@chakra-ui/react';
import React from 'react';

export default function Header() {
  return (
    <>
      <Box w="100%" h="3.5em" bg="facebook.400" boxShadow="dark-lg">
        <Center>
          <Box p="0.5em">
            <Text as="em" fontSize="xl" fontWeight="bold">
              Atlan SQL Editor
            </Text>
          </Box>
        </Center>
      </Box>
    </>
  );
}
