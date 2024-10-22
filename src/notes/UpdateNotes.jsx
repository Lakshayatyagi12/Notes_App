import React, { useContext, useEffect, useState } from 'react'
import { NotesStore } from '../contextApi/NotesStore'

const UpdateNotes = () => {
    const {notes,setNotes,updateid, setUpdateid,setShowUpdate} = useContext(NotesStore)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        let searchNote = notes.filter((note) => note.id == updateid); 
        // console.log(searchNote[0].title);
        // console.log(searchNote[0].description);
        setTitle(searchNote[0]?.title);
        setDescription(searchNote[0]?.description);
    },[updateid])
    const handleForm = (e) => {
        e.preventDefault();
        setShowUpdate(false);
        let date = new Date();
        let new_notes = notes.map(note => {
            if (note.id == updateid) {
                note.title = title
                note.description = description
            }
            return note;
        })
        setNotes(new_notes);
        localStorage.setItem("notes", JSON.stringify(new_notes));
        // setNotes([...notes,{title,description,id:Math.random()*5000,date:date.toLocaleDateString(),time:date.toLocaleTimeString()}])
    }
    return (
        <div className=' w-full flex flex-col gap-5 items-center'>
            <form onSubmit={handleForm } className='flex flex-col w-[80%] lg:w-[60%] xl:w-[50%] gap-3 justify-center items-center'>
                <input type='text'required value={title} placeholder='Title' className='py-2 w-[100%] border-2 rounded-md focus:border-b-2 focus:border-b-sky-500 outline-none' onChange={(e)=>setTitle(e.target.value)} />
                <input type='text' value={description} placeholder='Description' className='py-2 w-[100%] border-2 rounded-md focus:shadow-sm focus:shadow-sky-500 outline-none' onChange={(e)=>setDescription(e.target.value)} />
                <button className='py-2 font-semibold text-white w-[100%] border-2 rounded-md bg-indigo-600'>Update Notes</button>
            </form>
        </div>
    )
}

export default UpdateNotes