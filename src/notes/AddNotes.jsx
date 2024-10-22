import React, { useContext, useState } from 'react'
import { NotesStore } from '../contextApi/NotesStore'

const AddNotes = () => {
    const {notes,setNotes} = useContext(NotesStore)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleForm = (e) => {
        e.preventDefault();
        let date = new Date();
        setNotes([...notes,{title,description,id:Math.random()*5000,date:date.toLocaleDateString(),time:date.toLocaleTimeString(),reminderTime:""}])
       //! Storing in LocalStorage
        localStorage.setItem("notes", JSON.stringify([...notes, { title, description, id: Math.random() * 5000, date: date.toLocaleDateString(), time: date.toLocaleTimeString(),reminderTime:"" }]))
    }
    return (
        <div className=' w-full flex flex-col gap-5 items-center'>
            <form onSubmit={handleForm } className='flex flex-col w-[80%] lg:w-[60%] xl:w-[50%] gap-3 justify-center items-center'>
                <input type='text' required placeholder='Title' className='py-2 w-[100%] border-2 rounded-md focus:border-b-2 focus:border-b-sky-500 outline-none' onChange={(e)=>setTitle(e.target.value)} />
                <input type='text' placeholder='Description' className='py-2 w-[100%] border-2 rounded-md focus:shadow-sm focus:shadow-sky-500 outline-none' onChange={(e)=>setDescription(e.target.value)} />
                <button className='py-2 font-semibold text-white w-[100%] border-2 rounded-md bg-indigo-600'>Create Notes</button>
            </form>
        </div>
    )
}

export default AddNotes