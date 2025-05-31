import React from "react";
import Login from "./login";
import AddVehicle from "./Addvehicle";

import ServiceHistory from "./ServiceHistory";


const Home=()=>{
    return(
        <div>
             <Login/> 
           <AddVehicle/> 
            <ServiceHistory/>  
          
        </div>
    );
};
export default Home;
