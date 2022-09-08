import {useState}  from 'react'



function NoteForm() {
    const [newNote, setNewNote] = useState({
        title: "",
        content:""
    })
    //need to connect state and do a fetch post

    function handleChange(e) { 
        const {name, value} = e.target;
        setNewNote((newNote) => ({...newNote, [name]: value}))

    }

    console.log(newNote)

    return (
        <div>
            <form className="form">
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