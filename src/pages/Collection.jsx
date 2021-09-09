import React, { useState, useEffect } from 'react'
import {
    Heading, 
    Flex,
    Image
} from '@chakra-ui/react'
import axios from 'axios'

export default function Collection(props) {
    const [objIds, setObjIds] = useState([])
    const [artObjects, setArtObjects] = useState([])

    function getArtObjects() {
        axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1`)
            .then(res => setArtObjects(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getArtObjects()
    })

    const artImages = artObjects.map(obj => <Image src={obj.primaryImage} />)

    return (
        <>
            <Heading >
                Department Collection
            </Heading>

            <Flex>
                {artImages}
            </Flex>
        </>
    )
}