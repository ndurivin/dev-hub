import React from "react";
import { Link } from "react-router-dom";

function DevCard({ devName, devThumbnail, devId }) {
  return (

     <div className="py-4 container">
      <div className="row align-items-center">
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
         <div className="card p-0 overflow-hidden h-100 shadow">
         <div className="card-body justify-content-center align-items-center">
            <img src={devThumbnail} className="card-img-top img-fluid" alt={devName}/>
             <h4 className="card-title text-center">{devName}</h4>
             <Link to={"/profile/" + devId} className="btn btn-info">View Details</Link>
           </div>
        </div>
       </div> 
       </div>
       </div>
    
     
  );
}

export default DevCard;

// style={{height: '15vw'}}
// style={{ width: 18 + "rem" }}
