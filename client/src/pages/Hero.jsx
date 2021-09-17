import React from 'react'
import {
    Image,
    Box,
    Button
} from '@chakra-ui/react'
import Hero from '../svg/hero.svg'
import { Link } from "react-router-dom";

export default function HeroImg() {
    return (
        <Box h="100%">
            <Image src={Hero} alt='Hero Img' w="100%"  pl={20} />
            {/* <Link to="/exhibits" >
                <Button variant='ghost' color='#b73535' size='lg' >
                    Explore
                </Button >
            </Link> */}
        </Box>
    )
}
