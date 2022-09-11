import {Container, Row} from "react-bootstrap"
import Note from "./Note";



function Home ({displayedNotes}) {

    const favoriteNotes = displayedNotes.filter(note => note.favorite === true)



    return (
            <Container>
                <h2>Favorites</h2>
                <Row>
                    {favoriteNotes.map(note => {
                    return (<Note title={note.title} content={note.content} key={note.id} id={note.id} favorite={note.favorite}/>)
                     })}
                </Row>
            </Container>
    )


}

export default Home;