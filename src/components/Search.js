import { useState } from "react"
// import { Link } from "react-router-dom"

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
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>

        <div className='py-3 container'>
            {
                data.filter((value) => {
                    if(searchInfo === ""){
                        return value;
                    }else if (value.language_id.toLowerCase().includes(searchInfo.toLowerCase())){
                        return value;
                    }
                
            }) 
                .map((value) =>{
                    return(
                        <div className="container">
                            <div className="row p-2">
                            {/* <div className="col-3"> */}
                            <div className="card col" >
                            <div className="card-body" key={value.id}>
                                <h3 className="card-title text-center">{value.name}</h3>
                                <img src={value.image} className="card-img-top img-fluid" alt={""}/>
                                <h5 className="card-title text-center">{value.language_id}</h5>
                                <h5 className="card-title text-center">{value.experience} years</h5>
                                <h6 className="card-text"><small className="text-muted">Following: {value.following} people</small></h6>
                                <h6 className="card-text"><small className="text-muted">Followed by: {value.followers} people</small></h6>
                                {/* <Link to={"/profile/"+ value.key} className="btn btn-info">View Details</Link> */}

                            </div>
                            </div>
                            </div>
                            {/* </div> */}
                        </div>
                    )
                })
        } 
        </div>
      
    </div>
  )
}

export default Search;
