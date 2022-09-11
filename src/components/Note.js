



function Note({note, title, content, id, favorite, onHandleLike, onHandleDelete}) {

//when favorite is on, make heart pink

    function handleLikeClick () {

        fetch(`http://localhost:3004/notes/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                },
            body: JSON.stringify({...note, favorite: !favorite})
            }
        )
            .then((resp)=> resp.json())
            .then((updatedNote) => {
                onHandleLike(updatedNote)
                })
    }

    function handleDeleteClick() {
        fetch(`http://localhost:3004/notes/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                }
            }
        )
            .then((resp)=> {
                resp.json()
                onHandleDelete(id)

            })

    }


    return (
        <div>
            <div className="note-content">
                <h3>{title}</h3>
                <p>{content}</p>
            </div>            
            <div className="button-container">
                
                <button>✎</button> {/*Need to figure out route when clicking edit through link and then patch*/}
                <button onClick={() => handleLikeClick()}>♡</button>
                <button onClick={() => handleDeleteClick()} >X</button> {/*Need to figure delete note with fetch and state*/}
            </div>
        </div>
    )
}

export default Note;