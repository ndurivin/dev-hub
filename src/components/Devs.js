import React from 'react'
import DevCard from './DevCard';
import Search from './Search';

const Devs = () => {
  return (
    <div className="container">
      <br />
      <Search />
      <br/>
        <h2 className="text-center py-4">Featured Developers</h2>
      <DevCard />
    </div>
  )
}

export default Devs;
