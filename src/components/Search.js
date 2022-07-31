import React from 'react'

const Search = ({ placeholder, data }) => {


  return (
    <div>
        
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" 
               placeholder ={placeholder}aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <div className='py-3 container'>
            {data.map((value, key) => {
                return <div>{value.language_id}</div>
            })}
            
        </div>
      
    </div>
  )
}

export default Search;
