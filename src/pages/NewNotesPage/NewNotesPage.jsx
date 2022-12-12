import NewNoteForm  from "../../components/NewNoteForm/NewNoteForm";

export default function NewNotesPage({ addNote }) {
  return (
    <>
    <h1>Add A Note</h1>
    <div>
    <NewNoteForm addNote={ addNote }/>
    </div>
    </>
  );
}