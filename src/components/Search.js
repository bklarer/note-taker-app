

function Search ({search, onHandleSearch}) {



    return(
        <div>
         <input placeholder="search" value={search} onChange={onHandleSearch}>
         </input>   
        </div>
    )
}


export default Search;