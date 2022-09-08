import Note from './Note'


function NoteContainer ({displayedNotes}) {

//need to figure out how to make notes left to right 3 columns
    return(
        <div id="note-container">
            {displayedNotes.map((note) => {
            return (
            <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            />
            )})}
        </div>


    )
}


export default NoteContainer;