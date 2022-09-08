

function Search ({search, onHandleSearch}) {



    return(
        <div> {/*have it search both title and content?*/}
         <input placeholder="search" value={search} onChange={onHandleSearch}>
         </input>   
        </div>
    )
}


export default Search;