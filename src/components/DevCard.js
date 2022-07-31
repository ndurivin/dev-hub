import React from "react";
import { Link } from "react-router-dom";

function DevCard({ devName, devThumbnail, devId }) {
  return (

    
     <div className="row py-3">
         <div className="card h-100 shadow align-items-center p-3">
         <div className="card-body align-items-center h-100">
            <img src={devThumbnail} className="card-img-top img-fluid" alt={devName}/>
             <h4 className="card-title text-center">{devName}</h4>
             <Link to={"/devs/" + devId} className="btn btn-info">View Details</Link>
           </div>
        </div>
       </div> 
    
     
  );
}

export default DevCard;

// style={{height: '15vw'}}
// style={{ width: 18 + "rem" }}
