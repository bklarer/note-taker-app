

function Search ({search, onHandleSearch}) {



    return(
        <div> {/*Add sort dropdown with select and add to displayedNotes in App component*/}
         <input placeholder="search" value={search} onChange={onHandleSearch}>
         </input>   
        </div>
    )
}


export default Search;