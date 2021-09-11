import React from 'react'

export default function Contact() {
    const headerStyles = {
        color: "#ca3939",
        fontSize: "30px",
        marginBottom: "5%"
    }
    const pStyles = {
        color: "#ffffff",
        marginBottom: "5%"
    }
    const aStyles = {
        color: "cornflowerblue"
    }

    return (
        <>
            <div style={{marginTop: "5%"}}>
                <h1 style={headerStyles}>Tyler Parker</h1>
                <p style={pStyles}>Like most of his friends growing up, Tyler had a love for the computer and video games. It wasn't until after high school when he built his first gaming PC and started playing with mods and servers that he considered going into computer tech for a career. After completing some online coding exercises and becoming more interested in web development, he attended a boot camp with DevPoint Labs in 2015. Although he did not transition into a developer job, his understanding of software processes and concepts landed him a job as a business analyst, where he learned data management in an agile environment. Today he is enrolled in VSchool where he has been learning to make web applications with the Mongo, Express, React, and Node stack in hopes to work on exciting projects!</p>
                <p style={pStyles}>Contact: email | github</p>
            </div>
            <div>
                <h1 style={headerStyles}>Tyler Thomas</h1>
                <p style={pStyles}>Tyler finds science and psychology fascinating, and he loves coding. For as long as he can remember, his hands have been on a computer playing games, researching, and digging in! While he is a hands-on kind of guy, he also has a heart for mentoring. There’s nothing better than when he can use his communication and problem-solving talents to help others improve their people management and time management skills. At the end of the day, helping goal-focused people get the extra push they need to succeed is what lights him up the most! Tyler is currently finishing a Bachelor's Degree of Biology at the University of Utah and plans to pursue computer science as a career.</p>
                <p style={pStyles}>Contact: tyghomas0@gmail.com | <a href="https://github.com/tygthomas0" style={aStyles}>Github</a></p>
            </div>
            <div>
                <h1 style={headerStyles}>Mia Gallardo</h1>
                <p style={pStyles}>Lorem Ipsum</p>
                <p style={pStyles}>Contact: email | lorem</p>
            </div>
        </>
    )
}
