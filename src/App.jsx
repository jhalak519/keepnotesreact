import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Notes";
import CreateArea from "./components/CreateArea";
import NoteCard from "./components/NoteCard";
import "./App.css";

function App() {
  const [notes, setNotes] = React.useState([]);
  const [selectedNoteId, setSelectedNoteId] = React.useState(null);

  const [startEditing, setStartEditing] = React.useState(false);

  React.useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notesAppData"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem("notesAppData", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
      localStorage.setItem("notesAppData", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  }

  function handleViewNote(id) {
    setSelectedNoteId(id);
    setStartEditing(false);
  }

  function handleEditNote(id) {
    setSelectedNoteId(id);
    setStartEditing(true);
  }

  function handleCloseCard() {
    setSelectedNoteId(null);
    setStartEditing(false);
  }

  function handleSaveNote(updatedNote) {
    setNotes(prevNotes => {
      const updatedNotes = [...prevNotes];
      updatedNotes[selectedNoteId] = updatedNote;
      localStorage.setItem("notesAppData", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
    // Optional: Keep the card open or close it? Requirement implies saving updates content.
    // Let's keep it open to allow further edits, or close. Let's close for now as per typical UX or just update.
    // But since it's a modal, usually "Save" implies "Done". 
    // However, if we want to "read complete content... and have buttons to edit... and save",
    // maybe we stay in the modal. But the prompt says "save button which saves the updated content".
    // I'll update the selected note in the modal logic via the render, but we might need to handle the state update carefully.
    // Since we pass `notes[selectedNoteId]` to NoteCard, it will update if we re-render?
    // Actually NoteCard has internal state `editedNote`.
    // Let's close the modal after save for a clean interaction, or we can leave it open.
    // I will close it to be safe and simple.
    setSelectedNoteId(null);
    setStartEditing(false);
  }

  function handleDeleteFromCard() {
    deleteNote(selectedNoteId);
    setSelectedNoteId(null);
    setStartEditing(false);
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="container">
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onView={handleViewNote}
            onEdit={handleEditNote}
          />
        ))}
      </div>

      {selectedNoteId !== null && notes[selectedNoteId] && (
        <NoteCard
          note={notes[selectedNoteId]}
          onClose={handleCloseCard}
          onSave={handleSaveNote}
          onDelete={handleDeleteFromCard}
          defaultEditMode={startEditing}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
