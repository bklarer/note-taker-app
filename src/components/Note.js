import {Link} from 'react-router-dom'




function Note({title, content, id}) {



    return (
        <div>
            <div className="note-content">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div className="button-container">
                <button><Link to={`/books/${id}`}>View</Link></button>
                <button>Edit</button> {/*Need to figure out route when clicking edit through link and then patch*/}
                <button>Delete</button> {/*Need to figure delete note with fetch and state*/}
            </div>
        </div>
    )
}

export default Note;