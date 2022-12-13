import NoteCard from "../../components/NoteCard/NoteCard";

export default function AllNotePage( {notes}, {user} ) {
 
  console.log(user)
  return (
    <>
    <h1><u>All Notes</u></h1>
        {notes.length === 0 ?
        <p>No Notes Yet Dingus</p>
        :
      <div>
        {notes.map((note, idx) => (
          <NoteCard note={note} idx={idx}/>
        ))}
      </div>
      }
    </>
  );
}