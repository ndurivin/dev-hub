import { useState } from "react"

const Search = ({ placeholder, data }) => {

    const [searchInfo, setSearchInfo] = useState("")


  return (
    <div>
        
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" 
               placeholder ={placeholder}aria-label="Search" 
               onChange={(event) => {
                setSearchInfo(event.target.value);
               }}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <div className='py-3 container'>
            {
                data.filter((value) => {
                    if(searchInfo == ""){
                        return value;
                    }else if (value.language_id.toLowerCase().includes(searchInfo.toLowerCase())){
                        return value;
                    }
                
            }) 
                .map((value) =>{
                    return(
                        <div className="row" key={value.id}>
                            <div className="card col">
                                <img src={value.image} className="card-img-top img-fluid" alt={value.name}/>
                                <h4 className="card-title text-center">{value.language_id}</h4>
                                <h4 className="card-title text-center">{value.experience} years</h4>
                                <h6 className="card-text"><small className="text-muted">Followed by: {value.following}</small></h6>
                                <h6 className="card-text"><small className="text-muted">Followed by: {value.followers}</small></h6>

                            </div>

                        </div>
                    )
                })
        } 
        </div>
      
    </div>
  )
}

export default Search;
