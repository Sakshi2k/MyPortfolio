import React from 'react'
import { Component } from 'react'
import "./css/MainContent.css"
import "./css/Resume.css"

import resume from "./img/Sakshi_resume.jpg"

class Resume extends Component {
    render(){
        return(
            <div id="main-content">
            <div id="resume">
                <br/>
                <a href="https://drive.google.com/open?id=1VHAgBq_bvgG2HY4NqFp_B4SojKlOa9N_" 
                    id="download_link">DOWNLOAD</a>
                <br/>
                <img src={resume} alt="Resume"/>
                </div>
            </div>
        )
    }
}

export default Resume
