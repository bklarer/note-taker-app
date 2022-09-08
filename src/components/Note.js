import {Link} from 'react-router-dom'




function Note({title, content, id}) {



    return (
        <div>
            <div className="note-content">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>            
            <div className="button-container">
                
                <button>✎</button> {/*Need to figure out route when clicking edit through link and then patch*/}
                <button>♡</button> {/*Need to create state for making favorite*/}
                <button>X</button> {/*Need to figure delete note with fetch and state*/}
            </div>
        </div>
    )
}

export default Note;