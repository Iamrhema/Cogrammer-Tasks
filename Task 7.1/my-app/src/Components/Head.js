import React from 'react';
import './App.css';
import "../bootstrap-4.0.0-dist (1)/css/bootstrap.css"
import Logo from "../Images/Project - Drawing 13239360656008413034~2.png"


function Head(props) {
  return (
    <div className="App">
      <header>
        <div  class="jumbotron">
          <h1 id = "head">AFROMATION</h1>
          <img id="logo" src={Logo} alt = "Profile" class="rounded-circle"/>
        </div>
      </header>
      
      <div id = "welcome">
        <h1>{props.loggedIn ? `Welcome back , ${props.name}` : 'Please log in'}</h1>
      </div>
     
    </div>
  );
}

export default Head;
