import '../App.css';
import Search from './Search'
import Navbar from './Navbar';
import NoteContainer from './NoteContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <NoteContainer/>

    </div>
  );
}

export default App;
