import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Note from "./Note";

function Home({ displayedNotes }) {
  const [recentNotes, setRecentNotes] = useState([]);

  const favoriteNotes = displayedNotes.filter((note) => note.favorite === true);

  useEffect(() => {
    fetch("http://localhost:3004/notes?_sort=id&_order=desc&_limit=4")
      .then((resp) => resp.json())
      .then((recentNotes) => {
        setRecentNotes(recentNotes);
      });
  });

  return (
    <>
      <Container>
        <h2>Favorites</h2>
        <Row>
          {favoriteNotes.map((note) => {
            return (
              <Note
                title={note.title}
                content={note.content}
                key={note.id}
                id={note.id}
                favorite={note.favorite}
              />
            );
          })}
        </Row>
      </Container>
      <Container>
        <h2>Recents</h2>
        <Row>
          {recentNotes.map((note) => {
            return (
              <Note
                title={note.title}
                content={note.content}
                key={note.id}
                id={note.id}
                favorite={note.favorite}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Home;
