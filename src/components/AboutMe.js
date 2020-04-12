import React ,{ Component } from 'react'
import "./css/AboutMe.css"
import "./css/social-sites-bar.css"
import logo from "./svg/girl-stool-dark.svg"

class AboutMe extends Component {
    render(){
        return(
            <div className="main-content">
                <span id="girl-div">
                    <img id="girl" src={logo} alt=" "/>
                </span>
                <span class="icon-bar">
                    <a href="https://www.linkedin.com/in/sakshi-choudhary-27665117a/" class="linkedin"><i class="fa fa-linkedin"></i></a>
                    <a href="https://github.com/Sakshi2k/" class="github"><i class="fa fa-github"></i></a>
                    <a href="https://www.behance.net/sakshichoudhary2" class="behance"><i class="fa fa-behance" ></i></a>
                    <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                    <a href="https://www.facebook.com/sakshi.choudhary.35" class="facebook"><i class="fa fa-facebook"></i></a>
                </span>
            </div>
        )
    }
}

export default AboutMe