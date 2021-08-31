import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  extendTheme
} from '@chakra-ui/react';
import Hero from './components/HeroImg';
import NavBar from './components/NavBar';
import Exhibits from './components/Exhibits';

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
            <Link to='/exhibits' style={{margin: '0px'}}>
              <Hero />
            </Link>
          </Route>
          <Route path='/exhibits'>
            <Exhibits />
          </Route>
        </Switch>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
