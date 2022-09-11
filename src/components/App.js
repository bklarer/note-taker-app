import {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import '../App.css';
import Search from './Search'
import Navbar from './Navbar';
import NoteContainer from './NoteContainer';
import Home from './Home';
import NoteForm from './NoteForm';
import Note from './Note';

function App() {
  
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState("")

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleLike(updatedNote) {
  
    const updatedNotes = notes.map((note) => note.id === updatedNote.id ? updatedNote : note)

    setNotes(updatedNotes)
  }

  function handleDelete(id) {
    const updatedNotes = notes.filter((note) => note.id !== id)
    setNotes(updatedNotes)
  }

  function addNote(note) {
    setNotes(notes => [...notes, note])}


  useEffect(() => {
    fetch("http://localhost:3004/notes")
      .then((resp) => resp.json())
      .then((notes) => setNotes(notes))
  }, [])
  


  const displayedNotes = notes.filter(note => 
    note.title.toLowerCase().includes(search.toLowerCase()) || note.content.toLowerCase().includes(search.toLowerCase()))



  return (
    <div className="App">
      
      <Navbar/>
      <Switch/>
        <Route exact path="/new">
          <NoteForm  onAddNote={addNote}/>
        </Route>
        <Route exact path="/notes">
          <Search search={search} onHandleSearch={handleSearch} />
          <NoteContainer displayedNotes={displayedNotes} onHandleLike={handleLike} onHandleDelete={handleDelete}/>
        <Route exact path="/notes/:id">
          <Note/>
        </Route>
        </Route>
        <Route exact path="/">
          <Home displayedNotes={displayedNotes}/>
        </Route>
    </div>
  );
}

export default App;
