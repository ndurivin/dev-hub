import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


const search_url = "https://quiet-hamlet-90428.herokuapp.com/devs";

const Profile = () => {


    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [tech, setTech] = useState("")
    const [experience, setExperience] = useState("")
    const [followers, setFollowers] = useState("")
    const [following, setFollowing] = useState("")


    let{devId} = useParams()

    const realSearch = search_url + devId 

    const getDeveloper = () => {
        fetch(realSearch)
          .then((response) => response.json())
          .then((data) => {

            const devs = data.devs

            setImage(devs.image)
            setName(devs.name)
            setTech(devs.tech)
            setExperience(devs.experience)
            setFollowers(devs.followers)
            setFollowing(devs.following)
            

          });
        
      };
    
      useEffect(getDeveloper, [realSearch]);


  return (
    <div className='container py-4 '>
            <div className="card mb-3 py-3" style={{maxWidth: '540px'}}>
                <div className="row g-0 ">
                    <div className="col-md-4 ">
                        <img src={image} className="img-fluid rounded-start" alt={name}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">Name: {name}</h4>
                        <h5 className="card-text">Technology: {tech}</h5>
                        <h5 className="card-text">Experieince: {experience} Years</h5>
                        <h6 className="card-text"><small className="text-muted">Followers: {followers}</small></h6>
                        <h6 className="card-text"><small className="text-muted">Followed by: {following}</small></h6>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Profile;
