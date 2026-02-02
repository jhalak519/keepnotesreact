import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

function NoteCard({ note, onClose, onSave, onDelete, defaultEditMode = false }) {
  const [isEditing, setIsEditing] = useState(defaultEditMode);
  const [editedNote, setEditedNote] = useState({ ...note });

  useEffect(() => {
    setEditedNote({ ...note });
  }, [note]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedNote);
    setIsEditing(false);
  };

  if (!note) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        {isEditing ? (
          <>
            <input
              name="title"
              value={editedNote.title}
              onChange={handleChange}
              placeholder="Title"
            />
            <textarea
              name="content"
              value={editedNote.content}
              onChange={handleChange}
              placeholder="Take a note..."
              rows="5"
            />
          </>
        ) : (
          <>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </>
        )}

        <div className={styles.actions}>
          {isEditing ? (
            <>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <button onClick={onDelete}>Delete</button>
              <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
