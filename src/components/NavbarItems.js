import React from 'react';
import './css/Navbar.css'

function NavbarItems(props){
    return(
    <font size="4" face="Comic Sans MS">
        <a href={props.details.href}>{props.details.name}</a>
    </font>
    )
}

export default NavbarItems