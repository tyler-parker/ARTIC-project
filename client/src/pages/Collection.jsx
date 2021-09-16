import React, { useState, useEffect } from 'react'
import {
    Input,
    Image,
    Button,
    HStack,
    Box,
    Text
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Masonry from 'react-masonry-css'
import './collection.css'

export default function Collection() {
    const defaultValue = {searchTerm: ''}
    const [queryObjIds, setQueryObj] = useState([])
    const [searchValue, setSearchValue] = useState(defaultValue)
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setSearchValue(prevInput => ({...prevInput, [name]: value}))
        console.log(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${searchValue.searchTerm}&fields=id,title,image_id,artist_display&limit=40`)
            .then(res => setQueryObj(res.data.data))
            .catch(err => console.log(err))
        console.log(searchValue);
    }

    useEffect(() => {
        axios.get(`https://api.artic.edu/api/v1/artworks/search?q=stone&fields=id,title,image_id,artist_display&limit=40`)
            .then(res => setQueryObj(res.data.data))
            .catch(err => console.log(err))
    }, [])

    const queryArtImages = queryObjIds.map(obj => 
        <Link to={`/artpiece/${obj.id}`}>
            <Image 
                p={2} 
                key={obj.id} 
                src={`https://www.artic.edu/iiif/2/${obj.image_id}/full/843,/0/default.jpg`} 
            />
        </Link>
        )

    return (
        <>
            <Box m={5}>
                <Text fontSize='xl' fontFamily='Montserrat'   spacing={4}>
                    Enter search terms
                </Text>
                <form onSubmit={handleSubmit}>
                    <HStack justify='center' alignContent='center'>
                        <Input 
                        w='25%'
                        mt={2}
                        type='text' 
                        name='searchTerm'
                        placeholder='stone' 
                        value={searchValue.searchTerm} 
                        onChange={handleChange}
                        />
                        <Button size='md'>
                            Submit
                        </Button>
                    </HStack>
                </form>
            </Box>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {queryArtImages}
            </Masonry>
        </>
    )
}