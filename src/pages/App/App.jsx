import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotesPage from '../NewNotesPage/NewNotesPage';
import AllNotesPage from '../AllNotesPage/AllNotesPage';
import NavBar from '../../components/NavBar/NavBar';
import * as notesAPI from '../../utilities/notes-api'
import { set } from 'mongoose';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  const [notes, setNotes] = useState([]);

async function addNote(note) {
  const newNote = await notesAPI.create(note);
  setNotes([...notes, newNote])
}

useEffect (() => { 
  async function displayNotes() {
  const noteData = await notesAPI.index();
  setNotes(noteData);
}
displayNotes();
}, [user])
;
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/notes/new" element={<NewNotesPage user={ user } addNote={ addNote }/>} />
              <Route path="/notes" element={<AllNotesPage user={ user } notes={ notes } setNotes={ setNotes }/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
