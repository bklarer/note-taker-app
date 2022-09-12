import {useState, useEffect}  from 'react'
import {useParams, useHistory} from 'react-router-dom'


function EditNote({onUpdateNote}) {
    const [newNote, setNewNote] = useState({
        title: "",
        content:"",
        favorite: false
    })

    const {id} = useParams();
    const history = useHistory()

    function handleChange(e) { 
        const {name, value} = e.target;
        setNewNote((newNote) => ({...newNote, [name]: value}))

    }

    useEffect(() => {
        fetch(`http://localhost:3004/notes/${id}`)
          .then((res) => res.json())
          .then((note) => setNewNote(note));
      }, [id]);

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3004/notes/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(newNote)})  
        }

    fetch(`http://localhost:3004/notes/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          }})
          .then((resp) => resp.json())
        .then((updatedNote) => {
            onUpdateNote(updatedNote);
            history.push(`/notes/${id}`)
        })
        
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
                    Update
                </button>
            </form>
        </div>
    )
}


export default EditNote;