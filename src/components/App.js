import {useState, useEffect} from 'react'
import {Route, Switch, useHistory} from 'react-router-dom'
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
  
  const history = useHistory() //figure out

  function handleSearch(e) {
    setSearch(e.target.value)
  }


  useEffect(() => {
    fetch("http://localhost:3004/notes")
      .then((resp) => resp.json())
      .then((notes) => setNotes(notes))
  }, [])
  
  console.log("notes", notes)
  console.log("search", search)

  const displayedNotes = notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()))

  console.log("displayed Notes", displayedNotes)

  return (
    <div className="App">
      
      <Navbar/>
      <Switch/>
        <Route exact path="/new">
          <NoteForm />
        </Route>
        <Route exact path="/notes">
          <Search search={search} onHandleSearch={handleSearch}/>
          <NoteContainer displayedNotes={displayedNotes}/>
        <Route exact path="/notes/:id">
          <Note/>
        </Route>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
    </div>
  );
}

export default App;
