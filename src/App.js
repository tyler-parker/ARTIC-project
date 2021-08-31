import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  extendTheme
} from '@chakra-ui/react';
import Hero from './pages/Hero';
import NavBar from './components/NavBar';
import Exhibits from './pages/Exhibits';
import About from './pages/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" bgColor="#191919">
        <Grid minH="100vh" >
        <NavBar />
        <Switch>
          <Route exact path='/'>
              <Hero />
          </Route>
          <Route path='/exhibits'>
            <Exhibits />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
