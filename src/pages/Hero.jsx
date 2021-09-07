import React from 'react'
import {
    Image,
    Box,
} from '@chakra-ui/react'
import Hero from '../svg/hero.svg'

export default function HeroImg() {
    return (
        <Box h="100%">
            <Image src={Hero} alt='Hero Img' w="100%"  pl={20} />
        </Box>
    )
}
