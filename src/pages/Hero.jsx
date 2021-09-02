import React from 'react'
import {
    Button,
    Image,
    Box,
    useDisclosure,
    Portal,
    Container
} from '@chakra-ui/react'
import Hero from '../svg/hero.svg'

export default function HeroImg() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (

                <Box as='button'>
                    <Image src={Hero} alt='Hero Img' w="100%" h="100%"  pl={20} />
                </Box>
    )
}
