import Note from "./Note";


function Home ({displayedNotes}) {

    const favoriteNotes = displayedNotes.filter(note => note.favorite === true)



    return (
        <div>
            <h2>Favorites</h2>
            {favoriteNotes.map(note => {
                return (<Note title={note.title} content={note.content} key={note.id} id={note.id} favorite={note.favorite}/>)
            })}
        </div>
    )


}

export default Home;