import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotesPage from '../NewNotesPage/NewNotesPage';
import AllNotesPage from '../AllNotesPage/AllNotesPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  const [notes, setNotes] = useState([{
    text: "",
  }])

function addNote(note) {
  setNotes([...notes, note])
}

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/notes/new" element={<NewNotesPage user={ user } addNote={ addNote }/>} />
              <Route path="/notes" element={<AllNotesPage user={ user } notes={ notes } />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
