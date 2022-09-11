

function Search ({search, onHandleSearch}) {



    return(
        <div className="search">
         <input placeholder="search" value={search} onChange={onHandleSearch}>
         </input>   
        </div>
    )
}


export default Search;