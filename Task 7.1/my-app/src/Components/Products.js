import React from 'react';
import Gun1 from"../Images/fn_scar.jpg";
import Gun2 from "../Images/galil.jpg";
import Gun3 from "../Images/hk_416.jpg";

// products information
var ProductsSell = [{name:"Fn Scar", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec purus sit amet libero gravida rhoncus vel venenatis elit. "},
        {name:"Galil", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec purus sit amet libero gravida rhoncus vel venenatis elit."},
        {name:"Hk 416",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec purus sit amet libero gravida rhoncus vel venenatis elit."}];



function Products(props) {
  return (
  <div>
      <div class= "guns">
        {/* display content  */}
      <h3>{ProductsSell[0].name}</h3>
      <img class = "gun" src = {Gun1} alt="gunners"/>
      <p class="jumbotron products">{ProductsSell[0].description}</p>
      </div>
      <div class= "guns">
      <h3>{ProductsSell[1].name}</h3>
      <img class = "gun" src = {Gun2} alt="gunners"/>
      <p class="jumbotron products">{ProductsSell[1].description}</p>
      </div>
      <div class="guns">
      <h3>{ProductsSell[2].name}</h3>
      <img class = "gun" src = {Gun3} alt="gunners"/>
      <p class="jumbotron products">{ProductsSell[2].description}</p>
      </div>
  </div>
  );
}

export default Products;
