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

    /*
    useEffect(() => {
        const deptIds = departments.map(dept => dept.departmentId)
        //console.log(deptIds);
        for (let i = 0; i < departments.length; i++) {
            axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${departments[i]}&q=""&isHighlight`)
                .then(res => setHighlightedDisplays([...highlightedDisplays, res.data]))
                .catch(err => console.log(err))
        }
        //console.log("Highlighted Displays: ", highlightedDisplays)
    }, [departments])
    */
    
    return (
        <>  
            {/* // for now just feeding the carousels with static images */}
            <PreviewCarousel            
                title="EUROPEAN"
                img1={{src:"https://images.metmuseum.org/CRDImages/ep/original/ep14.40.811.R.jpg", title: "European Paintings"}} //(11)
                img2={{src:"https://images.metmuseum.org/CRDImages/es/original/15502.jpg", title: "European Sculptures and Decorative Arts"}} //(12)
                img3={{src:"https://images.metmuseum.org/CRDImages/gr/original/sf1719071.jpg", title: "Greek and Roman Art"}} //(13)
            />
            <Spacer />
            <PreviewCarousel  
                title="THE REST OF THE WORLD"
                img1={{src:"https://images.metmuseum.org/CRDImages/ad/original/DP160678.jpg", title: "American Decorative Arts"}} // (1)
                img2={{src:"https://images.metmuseum.org/CRDImages/an/original/DT4907.jpg", title: "Ancient Near Eastern Art"}} // (3)
                img3={{src:"https://images.metmuseum.org/CRDImages/ao/original/DP-576-001.jpg", title: "Arts of Africa, Oceania, and the Americas"}} //(5)
                img4={{src:"https://images.metmuseum.org/CRDImages/as/original/2015_300_283_O_Burke.jpg", title: "Asian Art"}} //(6)
            />
            <Spacer />
            <PreviewCarousel  
                title="RELIGIOUS"
                img1={{src:"https://images.metmuseum.org/CRDImages/cl/original/cdi34-123.jpg", title: "The Cloisters"}} //7
                img2={{src:"https://images.metmuseum.org/CRDImages/is/original/DT11509.jpg", title:"Islamic Art"}} //14
            />
            <Spacer />
            <PreviewCarousel  
                title="PERIOD PIECES"
                img1={{src:"https://images.metmuseum.org/CRDImages/eg/original/EG571.jpg", title:"Egyptian Art"}} //10
                img2={{src:"https://images.metmuseum.org/CRDImages/md/original/DP-19082-001.jpg", title:"Medieval Art"}} //17
                img3={{src:"https://images.metmuseum.org/CRDImages/ma/original/262655.jpg", title:"Modern Art"}} //21
            />
            <Spacer />
            <PreviewCarousel  
                title="MISCELLANEOUS"
                img1={{src:"https://images.metmuseum.org/CRDImages/aa/original/LC-14_40_895-001.jpg", title:"Arms and Armor"}} //4
                img2={{src:"https://images.metmuseum.org/CRDImages/ci/original/51.47.796%E2%80%93.805.jpg", title:"The Costume Institute"}} //8
                img3={{src:"https://images.metmuseum.org/CRDImages/dp/original/DP832654.jpg", title:"Drawings and Prints"}} //9
                img4={{src:"https://images.metmuseum.org/CRDImages/li/original/b1374401_002.jpg", title:"The Libraries"}} //16
                img5={{src:"https://images.metmuseum.org/CRDImages/mi/original/206246.jpg", title:"Musical Instruments"}} //18
                img6={{src:"https://images.metmuseum.org/CRDImages/ph/original/DP262062.jpg", title:"Photographs"}} //19
            />
        </>
    )
}
