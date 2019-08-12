import React from 'react';
import "../bootstrap-4.0.0-dist (1)/css/bootstrap.css";
import Logo from "../Images/rhem1.png";


function Icon() {
  return (
    <div className="jumbotron text-center" id="Intro">
        <h2 id = "Profilehead">Profile</h2>
      <img src={Logo} alt = "Profile" id="Profile" className="rounded-circle"/>
      <h3>Rhema Makamba</h3>
      <div>
          
          <p>     
I'm an out of the box thinker who has a passion for understanding how people think . I can easily get accustomed to any work environment . I am able to handle pressure. I always go an extra mile to help those that need to be helped. I am reliable and a hard worker.

          </p>
      </div>
      <h2 id="devName">Junior Developer</h2>

      <div id = "icons">
          <ul>
              <li className = "fa fa-lg fa-envelope"><span id="gmail">rhemaexel7@gmail.com</span></li>
              <li class="fa fa-lg fa-phone"><span id="gmail">+27 62 327 6851</span></li>
              <li class="fa fa-github fa-lg" aria-hidden="true" ><span id="gmail"><a href = "https://github.com/Iamrhema/Rhema-repository">Iamrhema</a></span></li>
          </ul>
      </div>
      <div>
</div>
    </div>
  );
}

export default Icon;