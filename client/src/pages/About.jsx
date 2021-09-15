import React from 'react'
import Artic from '../svg/artic.jpg' //By Beyond My Ken - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=17195009

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
            <img src={Artic} alt='Met Museum' style={imgStyles}/>
            <p style={pStyles}>
                The <a href="https://www.artic.edu/" style={aStyles} target="_blank">Art Institute of Chicago</a> is one of the oldest art
                museums in America, being founded in 1879. Located in Chicago, it hosts over three hundred thousand pieces of art.
                Academically, it focuses on the research and conservation of art across time, and features one of the largest art history libraries in the country.
                This web app uses the Institute's <a href="https://api.artic.edu/docs/" style={aStyles} target="_blank">free API</a> to showcase many of their works of art.
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