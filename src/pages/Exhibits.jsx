import React, { useState, useEffect } from 'react'
import PreviewCarousel from '../components/PreviewCarousel'
import {
    Spacer
} from '@chakra-ui/react'
import axios from 'axios'

export default function Exhibits() {

    const [departments, setDepartments] = useState([])
    const [highlightedDisplays, setHighlightedDisplays] = useState([])
        // get request to pull all department data to use for organizing exhibits
    function getDeptIds(){
        axios.get("https://collectionapi.metmuseum.org/public/collection/v1/departments")
            .then(res => setDepartments(res.data.departments))
            .catch(err => console.log(err))
    } 
    
    useEffect(() => {
        getDeptIds()
    }, [])

    useEffect(() => {
        const deptIds = departments.map(dept => dept.departmentId)
        console.log(deptIds);
        for (let i = 0; i < departments.length; i++) {
            axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${departments[i]}&q=""&isHighlight`)
                .then(res => setHighlightedDisplays([...highlightedDisplays, res.data]))
                .catch(err => console.log(err))
        }
        console.log("Highlighted Displays: ", highlightedDisplays)
    }, [departments])
        
    return (
        <>  
            {/* // for now just feeding the carousels with static images */}
            <PreviewCarousel            
                    title="ASIA, AFRICA AND THE AMERICAS"
            />
            <Spacer />
            <PreviewCarousel  
                title="EUROPEAN"
            />
            <Spacer />
            <PreviewCarousel  
                title="RELIGIOUS"
            />
            <Spacer />
            <PreviewCarousel  
                title="PERIOD PIECES"
            />
            <Spacer />
            <PreviewCarousel  
                title="MISCELLANEOUS"
            />
        </>
    )
}
