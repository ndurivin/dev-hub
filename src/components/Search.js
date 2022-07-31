import React from 'react'
import data from '../components/data/data'

const Search = () => {
data.map((value, key) => {
    return <div>
        {value.name}
    </div>
})

  return (
    <div>
        
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" 
                placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <div>
            
        </div>
      
    </div>
  )
}

export default Search;
