import React from 'react';
import './css/App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
      <div>
            <header className="navbar">
            <div id="nav-left"></div>
            <div id="nav-right">
                <Navbar/>
            </div>
            </header>
            <div className="page-content" >
                <Main/>
            </div>
        </div>
  )
}

export default App;
