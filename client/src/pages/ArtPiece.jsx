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
    const [artLikes, setArtLikes] = useState([0])
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
                    if (res.data[i].id === parseInt(id)) {
                        collectionExistsInDB = true
                        console.log("res.data[i]._id inside if inside for loop: ", res.data[i]._id)
                        dbID[0] = res.data[i]._id
                        console.log("dbID[0] after assigning res.data[i]._id: ", dbID[0] )
                        break
                    }
                }
                
                if (collectionExistsInDB) {
                    console.log('entering if/else statement, getting likes')
                    console.log("dbid inside if statement: ", dbID[0])
                    axios.get(`/collections/${dbID[0]}`)
                        .then(res => {
                            console.log("res from getting single object from db: ", res)
                            console.log("res.data.likes: ", res.data.likes)
                            console.log("res.data.likes: ", typeof(res.data.likes))
                            console.log("artlikes before setArtLikes: ", artLikes)
                            setArtLikes([res.data.likes])
                            console.log("artlikes after setArtLikes: ", artLikes)
                            console.log("typeof artlikes: ", typeof(artLikes))
                        })
                        .catch(err => console.log(err))
                }
                else {
                    console.log("entering if/else statement, posting something to db")
                    axios.post(`/collections`, {id: parseInt(id), likes: parseInt(artLikes[0])})
                }
                
            })
            .catch(err => console.log(err))
    }, [])

    function like(updates) {
        axios.get(`/collections`)
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].id === parseInt(id)) {
                        dbID[0] = res.data[i]._id
                        break
                    }
                }
                console.log("dbID inside like function: ", dbID[0])
                axios.put(`/collections/${dbID[0]}`, updates) //the problem is right here
                    .then(res => {
                        console.log("Res: ", res, "Res.body: ", res.data)
                        parseInt(artLikes[0]++)
                    })
                    .catch(err => console.log(err))
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
                            {artPiece.classification_titles}
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
                        <Text color='white' fontSize='xl' fontFamily="Montserrat">{artLikes[0]}</Text>
                        <button onClick={() => like({likes: parseInt(artLikes[0] + 1)})} style={buttonStyles}>Like</button>
                    </VStack>
                </GridItem>
            </Grid>
        </>
    )
}