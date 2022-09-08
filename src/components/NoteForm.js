



function NoteForm() {


    return (
        <div>
            <form className="form">
                <input className="title" type="text" id="title" name="title" placeholder="Title"/>
                <textarea className="note" type="text" id="note" name="note" placeholder="Type Here..."/>
                <button className="submit" type="submit">Submit</button>
            </form>
        </div>
    )
}


export default NoteForm