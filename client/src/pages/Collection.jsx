import React, { useState, useEffect } from 'react'
import {
    Input,
    Image,
    Button,
    HStack,
    InputRightElement,
    InputGroup,
    Text,
    VStack
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
        axios.get(`https://api.artic.edu/api/v1/artworks/search?q=cat&fields=id,title,image_id,artist_display&limit=40`)
            .then(res => setQueryObj(res.data.data))
            .catch(err => console.log(err))
    }, [])

    const queryArtImages = queryObjIds.map(obj => 
        <Link to={`/artpiece/${obj.id}`} key={obj.id}>
            <Image 
                p={2} 
                src={`https://www.artic.edu/iiif/2/${obj.image_id}/full/843,/0/default.jpg`} 
            />
        </Link>
        )

    return (
        <>
            <VStack m={8} alignItems='center'>
                <Text color='white'  fontSize='4xl' fontFamily='Montserrat'   spacing={4}>
                    Enter search terms
                </Text>
                <form onSubmit={handleSubmit}>
                        <InputGroup>
                            <Input 
                            w="300px"
                            type='text' 
                            name='searchTerm'
                            placeholder='stone' 
                            value={searchValue.searchTerm} 
                            onChange={handleChange}
                            pr="4.5rem"
                            color='white'
                            />
                            <InputRightElement width="4.5rem">
                                <Button mr={2} colorScheme='red' h="2rem" size="sm" variant='ghost'>
                                    Submit
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                </form>
            </VStack>
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