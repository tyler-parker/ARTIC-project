import React, { useState, useEffect } from 'react'
import PreviewCarousel from '../components/PreviewCarousel'
import {
    Spacer
} from '@chakra-ui/react'
import axios from 'axios'

export default function Exhibits() {
    const greek1 = "https://images.metmuseum.org/CRDImages/es/original/231613.jpg"
    const greek2 ="https://images.metmuseum.org/CRDImages/gr/original/DP333080.jpg"
    const greek3 = "https://images.metmuseum.org/CRDImages/gr/original/DP143310.jpg"

    const islam1 = "https://images.metmuseum.org/CRDImages/es/original/DP225514.jpg"
    const islam2 = "https://images.metmuseum.org/CRDImages/es/original/DP229782.jpg"
    const islam3 = "https://images.metmuseum.org/CRDImages/es/original/DP236917.jpg"

    return (
        <>
            <PreviewCarousel 
                title="GREEK & ROMAN"
                img1={greek1}
                img2={greek2}
                img3={greek3}
            />
            <Spacer />
            <PreviewCarousel  
                title="ISLAMIC"
                img1={islam1}
                img2={islam2}
                img3={islam3}
            />
        </>
    )
}
