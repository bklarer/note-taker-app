import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import Search from "./Search";
import Navbar from "./Navbar";
import NoteContainer from "./NoteContainer";
import Home from "./Home";
import NoteForm from "./NoteForm";
import EditNote from "./EditNote";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3004/notes")
      .then((resp) => resp.json())
      .then((notes) => setNotes(notes));
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleLike(updatedNote) {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );

    setNotes(updatedNotes);
  }

  function handleDelete(id) {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  function addNote(note) {
    setNotes((notes) => [...notes, note]);
  }

  function updateNote(updatedNote) {
    const updatedNotes = notes.map((originalNote) => {
      if (originalNote.id === updatedNote.id) {
        return updatedNote;
      } else {
        return originalNote;
      }
    });
    setNotes(updatedNotes);
  }

  const displayedNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/notes/new">
          <NoteForm onAddNote={addNote} />
        </Route>
        <Route exact path="/notes">
          <Search search={search} onHandleSearch={handleSearch} />
          <NoteContainer
            displayedNotes={displayedNotes}
            onHandleLike={handleLike}
            onHandleDelete={handleDelete}
          />
        </Route>
        <Route exact path="/notes/:id/edit">
          <EditNote onUpdateNote={updateNote} />
        </Route>
        <Route exact path="/">
          <Home displayedNotes={displayedNotes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
