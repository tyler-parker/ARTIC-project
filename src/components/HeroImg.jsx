import React from 'react'
import {
    VStack,
    Image,
    Fade,
    useDisclosure
} from '@chakra-ui/react'
import Hero from '../svg/hero.svg'

export default function HeroImg() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <VStack spacing={8} >
                <Image src={Hero} alt='asdf' w="100%" h="100%"  pl={20} />
        </VStack>

    )
}
