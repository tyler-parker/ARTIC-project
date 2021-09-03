import React, { useState } from 'react'
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {
    Box,
    Image,
    Icon,
    Container,
    Heading
} from '@chakra-ui/react'
import {
    RiArrowRightCircleLine,
    RiArrowLeftCircleLine
} from 'react-icons/ri'
import { MdCancel } from 'react-icons/md'

export default function PreviewCarousel(props) {

    return (
        <Box  m={4}>
            <Heading p={8} as='h2' size='2xl'> {props.title} </Heading>
            <Container  centerContent maxW="container.xl">
                <Carousel plugins={[
                    'infinite',
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 2
                    }
                    },
                    {
                        resolve: arrowsPlugin,
                        options: {
                        arrowLeft: <button><Icon boxSize={10} color='#CA3939' as={RiArrowLeftCircleLine}  name="angle-double-left" /></button>,
                        arrowLeftDisabled:<button><Icon boxSize={10} color='#CA3939' as={MdCancel}  name="angle-left" /></button>,
                        arrowRight: <button><Icon boxSize={10} color='#CA3939' as={RiArrowRightCircleLine}  name="angle-double-right" /></button>,
                        arrowRightDisabled: <button><Icon boxSize={10} color='#CA3939' as={MdCancel}  name="angle-right" /></button>,
                        addArrowClickHandler: true,
                        }
                    }
                ]}>
                    <Box>
                        <Image boxSize='550px'  src={props.img1} />
                        <p className="legend">Legend 1</p>
                    </Box>
                    <Box>
                        <Image boxSize='550px' src={props.img2} />
                        <p className="legend">Legend 2</p>
                    </Box>
                    <Box>
                        <Image boxSize='550px' src={props.img3} />
                        <p className="legend">Legend 3</p>
                    </Box>
                </Carousel>
            </Container>
        </Box>
    )
}
