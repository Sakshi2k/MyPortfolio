import React from 'react'
import { Component } from 'react'
import "./css/MainContent.css"
import "./css/AboutMe.css"

import logo from "./svg/girl-standing.svg"

class AboutMe extends Component {
    render(){
        return(
            <div id="main-content">
                <div id="girl-div">
                    <img id="girl-sitting" src={logo} alt=" "/>
                </div>
            </div>
        )
    }
}

export default AboutMe