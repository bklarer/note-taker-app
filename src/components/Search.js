

function Search ({search, onHandleSearch}) {



    return(
        <div className="search">
         <input placeholder="Search..." value={search} onChange={onHandleSearch}>
         </input>   
        </div>
    )
}


export default Search;