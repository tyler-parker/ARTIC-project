import React from 'react'
import {
    Flex,
    Image,
    HStack,
    Text
} from '@chakra-ui/react'
import Museo from '../svg/MUSEO DE PIEDRA.svg'
import About from '../svg/ABOUT.svg'
import Butterfly from '../svg/butterfly.svg'
import Collections from '../svg/COLLECTIONS.svg'
import Contact from '../svg/CONTACT.svg'
import SideBar from './SideBar'

import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Flex  
            // as="nav"  
            align="center"  
            justify="space-between"  
            wrap="wrap"  
            padding="2rem"
            h="80px"  
        >  
        <HStack>
            <SideBar />
            <Link to='/'>
                <Image src={Museo} alt="Museo De Piedra" />
            </Link>
        </HStack>
            <a href="https://www.miagallardodesign.com/" target="_blank">
                <Image src={Butterfly} />
            </a>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
            <HStack spacing={5}>
                <Link to='/collection'>
                    <Image src={Collections} />
                </Link>
                <Link to='/about'>
                    <Image src={About} />
                </Link>
                <Link to='/contact'>
                    <Image src={Contact} />
                </Link>
                
            </HStack>
        </Flex>
    )
}
