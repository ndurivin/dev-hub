import React, { useState } from 'react'
import DevCard from './DevCard';

const api_url = "https://quiet-hamlet-90428.herokuapp.com/devs";

const Home = () => {


const [devs, setDevs] = useState([])

const getDeveloper = () => {
    fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
        devs = data.devs
    })
}

  return (
    <div className='container'>
        <br/>
        <DevCard devName="Wcats" devId="2" devThumbnail="https://avatars.githubusercontent.com/u/8957173?v=4" />
    </div>
  )
}

export default Home;
