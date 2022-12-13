import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewNoteForm({ addNote, user }) {

  const [noteText, setNoteText] = useState({
    text: ""
  });

  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    addNote(noteText);
    setNoteText({
      text: "",
    })
    navigate('/notes')
  }

  function handleChange(evt) {
    setNoteText({ text: evt.target.value })
  }

  return (
    <>
      <h2>New Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={noteText.text}
          type="text"
          name="text"
          placeholder="Notes"
          onChange={handleChange}
          required
          pattern=".{1,}"
        />
        <button type="submit">Add My Note!</button>
      </form>
    </>
  );
}
