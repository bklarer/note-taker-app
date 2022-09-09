import {useState}  from 'react'



function NoteForm({onAddNote}) {
    const [newNote, setNewNote] = useState({
        title: "",
        content:"",
        favorite: false
    })


    function handleChange(e) { 
        const {name, value} = e.target;
        setNewNote((newNote) => ({...newNote, [name]: value}))

    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3004/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(newNote)})  
        .then((resp) => resp.json() )
        .then((note) => {
            onAddNote(note)
            setNewNote({
                title: "",
                content:"",
                favorite: false
            })
        
        })
        }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    className="title" 
                    type="text" 
                    id="title" 
                    name="title" 
                    placeholder="Title" 
                    onChange={handleChange}
                    value={newNote.title}/>
                <textarea 
                    className="note" 
                    type="text" 
                    id="content" 
                    name="content" 
                    placeholder="Type Here..." 
                    onChange={handleChange}
                    value={newNote.content}/>
                <button 
                    className="submit" 
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}


export default NoteForm