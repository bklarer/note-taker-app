




function Note({title, content}) {



    return (
        <div>
            <div className="note-content">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div className="button-container">
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Note;