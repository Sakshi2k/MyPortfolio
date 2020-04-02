import React from 'react';
import { Component } from 'react';
import {Switch,Route, BrowserRouter as Router} from 'react-router-dom';

import AboutMe from './AboutMe';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';

class Main extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={AboutMe}/>
                    <Route path="/AboutMe">
                        <AboutMe />
                    </Route>
                    <Route path="/Portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/Resume">
                        <Resume />
                    </Route>
                    <Route path="/Contact">
                        <Contact />
                    </Route>                    
                </Switch>
            </Router>
            )
    }
}

export default Main