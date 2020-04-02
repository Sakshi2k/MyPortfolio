import React from 'react';
import NavbarItems from './NavbarItems'

function Navbar(){
    return(
        <div>
            <div id="nav-left"></div>
            <div className="nav-right">
            <ul>
                <li><NavbarItems details = {{name : 'ABOUT', href : './AboutMe'}}/></li>
                <li><NavbarItems details = {{name : 'PORTFOLIO', href : './Portfolio'}}/></li>
                <li><NavbarItems details = {{name : 'RESUME', href : './Resume'}}/></li>
                <li><NavbarItems details = {{name : 'CONTACT', href : './Contact'}}/></li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar