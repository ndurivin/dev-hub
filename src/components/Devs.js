import React from 'react'
import DevCard from './DevCard';
import Search from './Search';
import DevData from ''

const Devs = () => {
  return (
    <div className="container">
      <br />
      <Search placeholder="Search for dev by tech stack..."/>
      <br/>
        <h2 className="text-center py-4">Featured Developers</h2>
      <DevCard />
    </div>
  )
}

export default Devs;
