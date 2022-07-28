import React from 'react'
import { Link } from 'react-router-dom';

function DevCard({devName, devThumbnail, devId}) {
  return (
    <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
            <div className="card">
                <img src={devThumbnail} className="card-img-top" alt={devName} />
                <div className="card-body">
                    <h5 className="card-title">{devName}</h5>
                    <Link to={'/dev/' + {devId}} className="btn btn-info">View Details</Link>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DevCard;
