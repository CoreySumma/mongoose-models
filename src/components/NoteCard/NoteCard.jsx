export default function NoteCard({ note }) {
  const date = new Date(note.createdAt);
  const dateOptions = { hour: 'numeric', minute: 'numeric', weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
  return (
    <>
      <h3>
        Created at: {date.toLocaleDateString(undefined, dateOptions)}
      </h3>
      <div>
        {note.text}
      </div>
    </>
  )
}