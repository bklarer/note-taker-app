import {useState, useEffect} from 'react'
import '../App.css';
import Search from './Search'
import Navbar from './Navbar';
import NoteContainer from './NoteContainer';
import React from 'react';


function App() {
  
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    //fetch notes
    
  }, [])
  
  
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <NoteContainer/>

    </div>
  );
}

export default App;
