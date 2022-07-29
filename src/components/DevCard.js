import React from "react";
import { Link } from "react-router-dom";

function DevCard({ devName, devThumbnail, devId }) {
  return (

     <div className="container">
     <div className="row">
         <div className="col">
           <img src={devThumbnail} className="card-img-top img-fluid" alt={devName}/>
           <div className="card-body align-items-center">
             <h4 className="card-title text-center">{devName}</h4>
             <Link to={"/devs/" + devId} className="btn btn-info">View Details</Link>
           </div>
        </div>
       </div> 
       </div>
    
     
  );
}

export default DevCard;

// style={{height: '15vw'}}
// style={{ width: 18 + "rem" }}
// h-100 shadow align-items-center p-3