import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Notes";
import CreateArea from "./components/CreateArea";
import "./App.css";

function App() {
  const [notes, setNotes] = React.useState([]);
  React.useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notesAppData"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    localStorage.setItem("notesAppData", JSON.stringify([...notes, newNote]));
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

  return (
    <div>
      <Header />
      {/* <Note title='jquery' content='This is very interesting' /> */}
      <CreateArea onAdd={addNote} />
      <div className="container">
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
