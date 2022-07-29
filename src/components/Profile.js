import React from 'react'

const Profile = () => {
  return (
    <div>
        <center>
            <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={} className="img-fluid rounded-start" alt={}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <h5 className="card-text">This is a wider card.</h5>
                        <h5 className="card-text"><small className="text-muted">Last updated 3 mins ago</small></h5>
                        <h5 className="card-text"><small className="text-muted">Last updated 3 mins ago</small></h5>
                    </div>
                    </div>
                </div>
            </div>
        </center>
    </div>
  )
}

export default Profile;
