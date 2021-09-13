import React, { useState, useEffect } from 'react'
import {
    Heading, 
    Grid,
    Image
} from '@chakra-ui/react'
import axios from 'axios'

export default function Collection(props) {
    const [objIds, setObjIds] = useState([])

    useEffect(() => {
        axios.get(`https://api.artic.edu/api/v1/artworks/search?q=stone&fields=id,title,image_id,artist_display&limit=20`)
            .then(res => setObjIds(res.data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        console.log(objIds)
    }, [objIds])

    const artImages = objIds.map(obj => <Image key={obj.id} src={`https://www.artic.edu/iiif/2/${obj.image_id}/full/843,/0/default.jpg`} />)

    return (
        <>
            <Heading >
                Department Collection
            </Heading>

            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                {artImages}
            </Grid>
        </>
    )
}