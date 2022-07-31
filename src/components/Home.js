import React, { useEffect, useState } from "react";
import DevCard from "./DevCard";
import NavHero from "./NavHero";
import { Link } from "react-router-dom";
import DevData from './data/data.json';


// const api_url = "https://quiet-hamlet-90428.herokuapp.com/devs";
// const DevsData = (DevData)

const Home = () => {
  const [devs, setDevs] = useState([]);

  const getDeveloper = () => {
    fetch(DevData)
      .then((response) => response.json())
      .then((devs) => {
        setDevs(devs);
      });
    
  };

  useEffect(getDeveloper, []);

  let devCards = devs.map((devs) => (<DevCard devName={devs.name} key={devs.id}
      devId={devs.id} devThumbnail={devs.image}/>
  ));

  return (
    <div className="container py-3">
      <h2 className="text-center p-4"> Welcome to React-Deves-Hub</h2>
      <h4 className="text-center p-4"> Home to the best software developers, with vast experiences</h4>
        <NavHero />
        <br/>
        <Link to={"/devs"} className="btn btn-info text-center">View Available Developers</Link>
        <div className="col">
      {devCards}
    </div>
    </div>
  );
};

export default Home;
