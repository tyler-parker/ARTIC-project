import React, { useState, useEffect } from 'react'
import {
    Heading, 
    Grid,
    Image
} from '@chakra-ui/react'
import axios from 'axios'
import Masonry from 'react-masonry-css'
import './collection.css'

export default function Collection(props) {
    const [queryObjIds, setQueryObj] = useState([])
    const [singleObjIds, setSingleObjIds] = useState([])

    useEffect(() => {
        axios.get(`https://api.artic.edu/api/v1/artworks/search?q=stone&fields=id,title,image_id,artist_display&limit=80`)
            .then(res => setQueryObj(res.data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(`https://api.artic.edu/api/v1/artworks?ids=4453,109467,11625,87451,23365&fields=id,title,image_id`)
            .then(res => setSingleObjIds(res.data.data))
            .catch(err => console.log(err))
    }, [])

    const queryArtImages = queryObjIds.map(obj => <Image p={2} key={obj.id} src={`https://www.artic.edu/iiif/2/${obj.image_id}/full/843,/0/default.jpg`} />)
    const singleArtImages = singleObjIds.map(obj => <Image p={2} key={obj.id} src={`https://www.artic.edu/iiif/2/${obj.image_id}/full/843,/0/default.jpg`} />)
    
    return (
        <>
            <Heading >
                Queried Collection
            </Heading>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {queryArtImages}
            </Masonry>

            <Heading >
                Single Collection
            </Heading>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {singleArtImages}
            </Masonry>
            {/* <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            </Grid> */}
        </>
    )
}