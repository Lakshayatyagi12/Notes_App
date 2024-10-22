import { createContext } from "react";
  
export const NotesStore = createContext([{
    id: 1,
    title: "Lakshaya",
    description: "Hello my name is Lakshaya",
    reminderTime: "10:30 AM",
    time: "02:03",
    date:"10/02/2024"
}])
