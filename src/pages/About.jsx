import React from 'react'
import {
    VStack,
    Image,
    Box
} from '@chakra-ui/react'
import Wing from '../svg/WingDesign.svg'

export default function About() {
    return (
        <a href='https://www.miagallardodesign.com/'>
            <VStack >
                <Image src={Wing} alt='Hero Img' w="100%" />
            </VStack>
        </a>
    )
}
