import React from 'react'
import {
    VStack,
    Image
} from '@chakra-ui/react'
import Met from '../svg/metMuseumPhoto.jpg' //By Hugo Schneider - Flickr, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=97399557

export default function About() {
    const pStyles = {
        color: "white",
        width: "90%",
        margin: "0 5% 0 5%"
    }
    const imgStyles = {
        width: "75%",
        margin: "5% 12.5% 2% 12.5%"
    }
    const aStyles = {
        color: "#ca3939"
    }
    return (
        <>
            <img src={Met} alt='Met Museum' style={imgStyles}/>
            <p style={pStyles}>
                The <a href="https://www.metmuseum.org/" style={aStyles}>Metropolitan Museum of Art</a>, or The Met, is the largest art
                museum in America. Located in New York City, it hosts over two million pieces of art.
                It includes works from many different periods of time and regions across the world.
                This web app uses the Met's <a href="https://metmuseum.github.io/" style={aStyles}>free API</a> to showcase many of their works of art.
            </p>    
       </>
    )
}
/*
<VStack >
                <Image src={Met} alt='Met Museum' w="75%" />
            </VStack>
 <VStack>
                <p>The <a href="https://www.metmuseum.org/">Metropolitan Museum of Art</a>, or The Met, is the largest art
                museum in America. Located in New York City, it hosts over two million pieces of art.
                It includes works from many different periods of time and regions across the world.
                This web app uses the Met's <a href="https://metmuseum.github.io/">free API</a> to showcase many of their works of art.</p>
            </VStack>
*/