import React from 'react'
import {
    Image,
    Box
} from '@chakra-ui/react'
import Hero from '../svg/hero.svg'
import { Link } from "react-router-dom";

export default function HeroImg() {
    return (
        <Link to='/collection'>
            <Box h="100%">
                <Image src={Hero} alt='Hero Img' w="100%"  pl={20} />
            </Box>
        </Link>
    )
}
