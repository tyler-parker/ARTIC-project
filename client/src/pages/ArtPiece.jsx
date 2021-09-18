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
    const [classification, setClassification] = useState([])
    const [artLikes, setArtLikes] = useState(0)
    const [artContainer, setArtContainer] = useState([])
    const dbID = useState("")
    const { id } = useParams()
    
    useEffect(() => {
        axios.get(`https://api.artic.edu/api/v1/artworks/${id}`)
        .then(res => setArtPiece(res.data.data))
        .catch(err => console.log(err))
    }, [])
    
    useEffect(() => {
        axios.get(`/collections`)
            .then(res => {
                console.log("res.data from useEffect:", res.data)
                var collectionExistsInDB = false
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].id == id) {
                        collectionExistsInDB = true
                        dbID[0] = res.data[i]._id
                        break
                    }
                }
                
                if (collectionExistsInDB) {
                    console.log('entering if/else statement, getting likes')
                    axios.get(`http://localhost:9000/collections/${dbID[0]}`) //the problem is right here
                        .then(res => {
                            console.log("res from getting single object from db: ", res)
                            setArtLikes(/*res.data.likes*/)
                        })
                        .catch(err => console.log(err))
                }
                else {
                    console.log("entering if/else statement, posting something to db")
                    axios.post(`/collections`, {id: id, likes: artLikes})
                }
                
            })
            .catch(err => console.log(err))
    }, [])

    function like(updates) {
        axios.put(`http://localhost:9000/collections/${dbID[0]}`, updates) //the problem is right here
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
                            <Text 
                            color='white' 
                            fontSize='3xl' 
                            fontFamily='Montserrat'>
                                {artPiece.title} {/* // Title */}
                            </Text>
                            <Text 
                            color='white' 
                            fontSize='xl' 
                            fontFamily='Montserrat'>
                                {artPiece.artist_display} {/* // Artist's name and other info */}
                            </Text>
                            <Text
                                color='white' 
                                fontSize='xl' 
                                fontFamily='Montserrat'
                            >
                                {artPiece.classification_titles.join(', ')}
                            </Text>
                            <Text
                                color='white' 
                                fontSize='xl' 
                                fontFamily='Montserrat'
                            >
                                {artPiece.place_of_origin}
                            </Text>
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
