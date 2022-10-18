import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import CreateNote from './components/CreateNote/CreateNote';
import Notes from './components/Notes/Notes';
import Footer from './components/Footer/Footer';

function App() {

  const LOCAL_STORAGE_KEY = "notes";

  const [notes,setNote] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  },[notes]);

  const addNote = (newNote) => {
    setNote((prevNote) => {
      return [...prevNote,newNote]
    });
  };

  const deleteNote = (id) => {
    setNote((prevNote) => {
      return prevNote.filter((noteItem,index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd = {addNote} />
      {notes.map((note,index)=>{
        return(
          <Notes key={note.id} id={index} title = {note.title} content = {note.content} deleteNote = {deleteNote} />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
