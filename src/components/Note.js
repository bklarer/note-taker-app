import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Note({
  note,
  title,
  content,
  id,
  favorite,
  onHandleLike,
  onHandleDelete,
}) {

  function handleLikeClick() {
    fetch(`http://localhost:3004/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...note, favorite: !favorite }),
    })
      .then((resp) => resp.json())
      .then((updatedNote) => {
        onHandleLike(updatedNote);
      });
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3004/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((resp) => {
      resp.json();
      onHandleDelete(id);
    });
  }

  const heart = favorite === true ? "♥" : "♡";

  return (
    <Col sm={3}>
      <Card className="mt-4">
        <div className="note-content note">
          <h3 className="card-title">{title}</h3>
          <p className="card-body">{content}</p>
        </div>
        <div className="card-body">
          <Link to={`/notes/${id}/edit`}>✎</Link>{" "}
          <button onClick={() => handleLikeClick()} className="heart-btn">
            {heart}
          </button>
          <button onClick={() => handleDeleteClick()} className="delete-btn">
            X
          </button>{" "}
        </div>
      </Card>
    </Col>
  );
}

export default Note;
