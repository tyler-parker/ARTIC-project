import React from 'react'
import {
    VStack,
    Image
} from '@chakra-ui/react'
import Hero from '../svg/hero.svg'

export default function HeroImg() {
    return (
        <VStack spacing={8} >
            <Image src={Hero} alt='asdf' w="100%" h="100%"  pl={20} />
        </VStack>
    )
}
