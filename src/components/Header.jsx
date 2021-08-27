import React from 'react'
import {
    Flex,
    Link,
    Image,
    HStack
} from '@chakra-ui/react'
import Museo from '../svg/MUSEO DE PIEDRA.svg'
import About from '../svg/ABOUT.svg'
import Butterfly from '../svg/butterfly.svg'
import Exhibits from '../svg/EXHIBITS.svg'
import Contact from '../svg/CONTACT.svg'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

export default function Header() {
    return (
        <Flex  
            as="nav"  
            align="center"  
            justify="space-between"  
            wrap="wrap"  
            padding="2rem"
            h="100px"  
        >  
        <Link>
          <Image src={Museo} alt="Museo De Piedra" />
        </Link>
        <Link isExternal href="https://www.miagallardodesign.com/">
          <Image src={Butterfly} />
        </Link>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <HStack spacing={5}>
            <Image src={Exhibits} />
            <Image src={About} />
            <Image src={Contact} />
          </HStack>
        </Flex>
    )
}
