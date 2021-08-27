import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  Flex,
  HStack
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Hero from './hero.svg'
import Museo from './MUSEO DE PIEDRA.svg'
import Butterfly from './butterfly.svg'
import Exhibits from './EXHIBITS.svg'
import About from './ABOUT.svg'
import Contact from './CONTACT.svg'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" bgColor="#191919">
        <Grid minH="100vh" >
        <Flex  
            as="nav"  
            align="center"  
            justify="space-between"  
            wrap="wrap"  
            padding="2rem"  
        >  
        <Link>
          <Image src={Museo} alt="Museo De Piedra" />
        </Link>
        <Link>
          <Image src={Butterfly} />
        </Link>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <HStack spacing={5}>
            <Image src={Exhibits} />
            <Image src={About} />
            <Image src={Contact} />
          </HStack>
        </Flex>  
          <VStack spacing={8} >
              <Image src={Hero} alt='asdf' h="100%" pl={20} />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
