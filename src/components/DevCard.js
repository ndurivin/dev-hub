import React from 'react'
import { Link } from 'react-router-dom';

function DevCard({devName, devThumbnail, devId}) {
  return (
    <div className='container'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
            <div className="card h-100 shadow align-items-center">
                <img src={devThumbnail} className="card-img-top" alt={devName} />
                <div className="card-body align-items-center">
                    <h4 className="card-title text-center">{devName}</h4>
                    <Link to={'/dev/' + {devId}} className="btn btn-info">View Details</Link>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DevCard;

// style={{height: '15vw'}}