import React, { useEffect, useState } from "react";
import DevCard from "./DevCard";
import NavHero from "./NavHero";
// import data from "./data/data";

const api_url = "https://quiet-hamlet-90428.herokuapp.com/devs";
// const devsData = (data)

const Home = () => {
  const [devs, setDevs] = useState([]);

  const getDeveloper = () => {
    fetch(api_url)
      .then((response) => response.json())
      .then((devs) => {
        setDevs(devs);
      });
    // .catch((err) => err)
  };

  useEffect(getDeveloper, []);

  let devCards = devs.map((devs) => (<DevCard devName={devs.name} key={devs.id}
      devId={devs.id} devThumbnail={devs.image}/>
  ));

  return (
    <div className="container py-3">
        <NavHero />
        <h2 className="text-center p-4">Featured Developers</h2>
        <div className="col">
      {devCards}
    </div>
    </div>
  );
};

export default Home;
