import { useState } from "react";
import { checkToken } from '../../utilities/users-service';
import NoteCard from "../../components/NoteCard/NoteCard";

export default function AllNotePage( {notes} ) {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  // const [notes, setNotes] = useState("");
  
  return (
    <>
    <h1>All Notes</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
      <div>
        {notes.map((note, idx) => (
          <NoteCard note={note} idx={idx}/>
        ))}
      </div>
    </>
  );
}