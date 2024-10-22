import { useState, useEffect } from "react";
import { NotesStore } from "./NotesStore";

const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState(() => {
      const savedNotes = localStorage.getItem("notes");
      return savedNotes ? JSON.parse(savedNotes) : [{
        id: 105,
        title: "Note 1",
        description: "Hello this is my notes",
        date: "10/4/2020",
        time: "10:39 AM",
        reminderTime:"03:00 AM"
      }];
    });
    useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
    // JSON.parse(localStorage.getItem("notes"))||[]
  const [updateid, setUpdateid] = useState(0);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showRemForm, setShowRemForm] = useState(false);
  const [reminder , setReminder] = useState(false)
  return (
      <NotesStore.Provider value={{showUpdate, setShowUpdate,showRemForm, setShowRemForm, notes, setNotes , updateid ,setUpdateid ,reminder , setReminder }}>
          {children}
      </NotesStore.Provider>
  )
}

export default NotesProvider