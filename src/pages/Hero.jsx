import React from 'react'
import {
    VStack,
    Image,
    Box,
    useDisclosure
} from '@chakra-ui/react'
import Hero from '../svg/hero.svg'

export default function HeroImg() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (

            <Box  >
                <Image src={Hero} alt='Hero Img' w="100%" h="100%"  pl={20} />
            </Box>

    )
}
