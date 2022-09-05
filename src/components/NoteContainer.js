import Note from './Note'


function NoteContainer ({displayedNotes}) {


    return(
        <div>
            {displayedNotes.map((note) => {
            return (
            <Note
            key={note.id}
            title={note.title}
            content={note.content}
            />
            )})}
        </div>


    )
}


export default NoteContainer;