import Note from "./Note";

//Insert all favorite notes

function Home ({displayedNotes}) {

    //Filter for favorites
    const favoriteNotes = displayedNotes.filter(note => note.favorite === true)



    return (
        <div>
            {favoriteNotes.map(note => {
                return (<Note title={note.title} content={note.content} key={note.id} id={note.id}/>)
            })}
        </div>
    )


}

export default Home;