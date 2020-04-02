import React from 'react'
import { Component } from 'react'
import PortfolioItems from './PortfolioItems'
import "./css/Portfolio.css"

class Portfolio extends Component {
    render(){
        return(
            <div id="main-content">
                <div id= "div">
                <span id="items">
                <PortfolioItems details = {{project_name:'Project1', 
                                text:"Project Description 1", id:'1'
                // href:'/'
                }}/></span>
                <span id="items">
                <PortfolioItems details = {{project_name:'Project2', 
                                text:"Project Description 2", id:'2'
                // href:'/'
                }}/></span> 
                </div>
                
            </div>
        )
    }
}

export default Portfolio
