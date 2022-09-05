import {useState, useEffect} from 'react'
import '../App.css';
import Search from './Search'
import Navbar from './Navbar';
import NoteContainer from './NoteContainer';
import React from 'react';


function App() {
  
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState("")
  
  function handleSearch(e) {
    setSearch(e.target.value)
  }


  useEffect(() => {
    //fetch notes
    fetch("http://localhost:3004/notes")
      .then((resp) => resp.json())
      .then((notes) => setNotes(notes))
  }, [])
  
  console.log("notes", notes)
  console.log("search", search)



  return (
    <div className="App">
      <Navbar/>
      <Search search={search} onHandleSearch={handleSearch}/>
      <NoteContainer/>

    </div>
  );
}

export default App;
