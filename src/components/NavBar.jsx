import React from 'react'
import {
    Flex,
    Image,
    HStack
} from '@chakra-ui/react'
import Museo from '../svg/MUSEO DE PIEDRA.svg'
import About from '../svg/ABOUT.svg'
import Butterfly from '../svg/butterfly.svg'
import Exhibits from '../svg/EXHIBITS.svg'
import Contact from '../svg/CONTACT.svg'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Header() {
    return (
        <Flex  
            as="nav"  
            align="center"  
            justify="space-between"  
            wrap="wrap"  
            padding="2rem"
            // h="px"  
        >  
            <Link to='/'>
            <Image src={Museo} alt="Museo De Piedra" />
            </Link>
            <a href="https://www.miagallardodesign.com/">
            <Image src={Butterfly} />
            </a>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
            <HStack spacing={5}>
                <Link to='/exhibits'>
                    <Image src={Exhibits} />
                </Link>
                <Image src={About} />
                <Image src={Contact} />
            </HStack>
        </Flex>
    )
}
