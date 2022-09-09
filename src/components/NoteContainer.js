import Note from './Note'


function NoteContainer ({displayedNotes, onHandleLike}) {

//need to figure out how to make notes left to right 3 columns
    return(
        <div id="note-container">
            {displayedNotes.map((note) => {
            return (
            <Note
            key={note.id}
            note={note}
            id={note.id}
            title={note.title}
            content={note.content}
            favorite={note.favorite}
            onHandleLike={onHandleLike}
            />
            )})}
        </div>


    )
}


export default NoteContainer;