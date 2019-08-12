import React from 'react';
import "./css/App.css"
import "./bootstrap-4.0.0-dist (1)/css/bootstrap.css";
import Icon from "./Components/Icon";
import Education from "./Components/head";
import Training from "./Components/WorkExperience";
import Work from "./Components/Work";
import Skills from "./Components/Skills";


function App() {
  return (
    <div>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    
    <div id = "Content"> 
        <Education/>
        <Training/>
        <Work/>
        <Skills/>
    </div>
     <Icon/>
     
    </div>
  );
}

export default App;
