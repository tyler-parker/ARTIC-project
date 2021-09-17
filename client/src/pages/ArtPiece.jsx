import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    Image,
    VStack,
    Text,
    Grid,
    GridItem
} from '@chakra-ui/react'
import axios from 'axios'

export default function ArtPiece() {
    const [artPiece, setArtPiece] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://api.artic.edu/api/v1/artworks/${id}`)
            .then(res => setArtPiece(res.data.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
                <Grid templateColumns="1fr 1fr" margin={10}>
                    <GridItem>
                        <Image src={`https://www.artic.edu/iiif/2/${artPiece.image_id}/full/600,/0/default.jpg`} />
                    </GridItem>
                    <GridItem>
                        <VStack alignItems='center' >
                            <Text color='white' fontSize='3xl' fontFamily='Montserrat'>{artPiece.title}</Text>
                            <Text color='white' fontSize='xl' fontFamily='Montserrat'>{artPiece.artist_display}</Text>
                        </VStack>
                    </GridItem>
                </Grid>
        </>
    )
}
