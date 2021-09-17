import React from 'react'
import {
    Flex,
    Image,
    HStack
} from '@chakra-ui/react'
import articNav from '../svg/articNav.svg'
import About from '../svg/ABOUT.svg'
import Collections from '../svg/COLLECTIONS.svg'
import Contact from '../svg/CONTACT.svg'
import Bust from '../svg/bust.svg'

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
            <Image src={Bust} />
            <Link to='/'>
                <Image src={articNav} alt="ARTIC" target="_blank"/>
            </Link>
        </HStack>
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
