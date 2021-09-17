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
    const [artPiece, setArtPiece] = useState({})
    const [artLikes, setArtLikes] = useState(0)
    const [artContainer, setArtContainer] = useState({})
    const [dbID, setDBID] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://api.artic.edu/api/v1/artworks/${id}`)
            .then(res => setArtPiece(res.data.data))
            .catch(err => console.log(err))
        
        axios.get(`http://localhost:9000/collections/`)
            .then(res => {
                console.log(res)
                //setArtContainer(res)
            })
            .catch(err => console.log(err))
        
        var collectionExistsInDB = false
        for (const key in artContainer) {
            if (artContainer[key].imageID === id) {
                collectionExistsInDB = true
                setDBID(artContainer[key]._id)
                break
            }
        }
        if (!collectionExistsInDB) {
            axios.post(`http://localhost:9000/collections`, {imageID: id, likes: artLikes})
        }
        else {
            axios.get(`http://localhost:9000/collections/${dbID}`)
                .then(res => {
                    console.log("res from getting single object from db: ", res)
                    setArtLikes(/*res.data.likes*/)
                })
                .catch(err => console.log(err))
        }
        
    }, [])

    function like(updates) {
        axios.put(`http://localhost:9000/collections/${dbID}`, updates)
            .then(res => {
                console.log("Res: ", res, "Res.body: ", res.body)
                setArtLikes(prevArtLikes => prevArtLikes + 1)
            })
            .catch(err => console.log(err))
    }

    const buttonStyles = {
        color: '#ffffff',
        border: '1px solid #ffffff'
    }

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
                    <GridItem>
                        <VStack alignItems='center'>
                            <Text color='white' fontSize='xl' fontFamily="Montserrat">{artLikes}</Text>
                            <button onClick={() => like({likes: (artLikes + 1)})} style={buttonStyles}>Like</button>
                        </VStack>
                    </GridItem>
                </Grid>
        </>
    )
}
