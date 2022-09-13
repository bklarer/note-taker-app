import { Container, Row } from "react-bootstrap";
import Note from "./Note";

function NoteContainer({ displayedNotes, onHandleLike, onHandleDelete }) {
  return (
    <Container>
      <Row>
        {displayedNotes.map((note) => {
          return (
            <Note
              key={note.id}
              note={note}
              id={note.id}
              title={note.title}
              content={note.content}
              favorite={note.favorite}
              onHandleLike={onHandleLike}
              onHandleDelete={onHandleDelete}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default NoteContainer;
