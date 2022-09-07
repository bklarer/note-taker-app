import Note from './Note'


function NoteContainer ({displayedNotes}) {


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