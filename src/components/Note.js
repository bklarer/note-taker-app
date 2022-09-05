




function Note({title, content}) {



    return (
        <div>
            <div classname="note-content">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            <div classname="button-container">
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Note;