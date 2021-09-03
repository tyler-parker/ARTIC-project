import React from 'react'
import {
    VStack,
    Image
} from '@chakra-ui/react'
import Wing from '../svg/WingDesign.svg'

export default function About() {
    return (
            <VStack >
                <Image src={Wing} alt='Wing' w="100%" />
            </VStack>
    )
}
