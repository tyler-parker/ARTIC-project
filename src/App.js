import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import Hero from './components/HeroImg';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" bgColor="#191919">
        <Grid minH="100vh" >
        <Header />
        <Hero />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
