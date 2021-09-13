import React, { useState, useEffect } from 'react'
import {
    Heading, 
    Grid,
    Image
} from '@chakra-ui/react'
import axios from 'axios'

export default function Collection(props) {
    const [queryObjIds, setQueryObj] = useState([])
    const [singleObjIds, setSingleObjIds] = useState([])

    useEffect(() => {
        axios.get(`https://api.artic.edu/api/v1/artworks/search?q=stone&fields=id,title,image_id,artist_display&limit=20`)
            .then(res => setQueryObj(res.data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`https://api.artic.edu/api/v1/artworks?ids=4453,109467,11625,87451,23365&fields=id,title,image_id`)
            .then(res => setSingleObjIds(res.data.data))
            .catch(err => console.log(err))
    })

    const queryArtImages = queryObjIds.map(obj => <Image key={obj.id} src={`https://www.artic.edu/iiif/2/${obj.image_id}/full/843,/0/default.jpg`} />)
    const singleArtImages = singleObjIds.map(obj => <Image key={obj.id} src={`https://www.artic.edu/iiif/2/${obj.image_id}/full/843,/0/default.jpg`} />)
    
    return (
        <>
            <Heading >
                Queried Collection
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                {queryArtImages}
            </Grid>

            <Heading >
                Single Collection
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                {singleArtImages}
            </Grid>
        </>
    )
}