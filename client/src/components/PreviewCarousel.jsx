import React, { useState, useEffect } from 'react'
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
    const [info, setInfo] = useState([])
    const pStyles = {
        color: "white",
        width: "90%",
        margin: "0 5% 0 5%"
    }
    
    useEffect(() => {
        let objectArray = []
        for (const key in props) {
            console.log("key: ", key)
            if (key !== "title") {
                objectArray.push(props[key])
            }
        }
        const boxes = objectArray.map(department => <Box key={department.title}><Image boxSize='550px' src={department.src} /><p style={pStyles} className="legend">{department.title}</p></Box>)
        setInfo(boxes)
    }, [])
    

    return (
        <Box  m={4}>
            <Heading color='white' p={8} as='h2' size='2xl'> {props.title} </Heading>
            <Container  centerContent maxW="container.lg">
                <Carousel plugins={[    //Carousel from the @brainhubeu/react-carousel library
                    'infinite',             //link to docs: https://brainhubeu.github.io/react-carousel/docs/examples/customArrows
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 2
                    }
                    },
                    {
                        resolve: arrowsPlugin,  //customizing the control arrows
                        options: {
                        arrowLeft: <button><Icon boxSize={10} color='#CA3939' as={RiArrowLeftCircleLine}  name="angle-double-left" /></button>,
                        arrowLeftDisabled:<button><Icon boxSize={10} color='#CA3939' as={MdCancel}  name="angle-left" /></button>,
                        arrowRight: <button><Icon boxSize={10} color='#CA3939' as={RiArrowRightCircleLine}  name="angle-double-right" /></button>,
                        arrowRightDisabled: <button><Icon boxSize={10} color='#CA3939' as={MdCancel}  name="angle-right" /></button>,
                        addArrowClickHandler: true,
                        }
                    }
                ]}>
                    {info}
                    
                </Carousel>
            </Container>
        </Box>
    )
}
//info.map(department => <Box key={department.title}><Image boxSize='550px' src={department.src} /><p style={pStyles} className="legend">{department.title}</p></Box>)