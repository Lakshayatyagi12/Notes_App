import React, { useContext, useEffect, useState } from 'react'
import { NotesStore } from '../contextApi/NotesStore'
import AddNotes from './AddNotes';
import UpdateNotes from './UpdateNotes';

const GetAllNotes = () => {
    const {notes,setNotes,setUpdateid,showUpdate, setShowUpdate,showRemForm, setShowRemForm ,reminder , setReminder} = useContext(NotesStore)
  // console.log(notes);
  const [time, setTime] = useState("");
  const [remId, setRemId] = useState(0);

  const handleUpdate = (id) => {
    // console.log(id);
    alert("Editing.....");
    setUpdateid(id);
    setShowUpdate(true)
    // let new_array = 
  }
  const handleDelete = (id) => {
    let ans = confirm("Do You Really Want to Delete")
    if (ans) {
      let new_arr = notes.filter(note => note.id != id);
      // console.log(new_arr);
      setNotes(new_arr)
      localStorage.setItem("notes", JSON.stringify(new_arr));
      // console.log("delete", id);
    }
  }
  const handleReminder = (id) => {
    setRemId(id)
    
    //! Finding note object by Id
    //? Setting it's time to time slate
    let note_obj = notes.filter((note) => note.id == id);
    setTime(note_obj[0].reminderTime)
    console.log(remId);
    console.log(time);
    console.log(note_obj);
   
    setShowRemForm(true);
  }

  const handleReminderSubmit = (e) => {
    e.preventDefault();
    let new_arr = notes.map((note) => {
      if (note.id == remId) {
        note.reminderTime = time;
        const reminderDate = new Date();
        const [hours, minutes] = time.split(':').map(Number);
        reminderDate.setHours(hours, minutes, 0, 0);

        if (reminderDate > new Date()) {
          const timeout = reminderDate - new Date();
          setTimeout(() => {
            alert(`Reminder for note: ${note.title}`);
          }, timeout);
        }
      }
      return note;
    });
    setNotes(new_arr);
    localStorage.setItem("notes", JSON.stringify(new_arr));
    setShowRemForm(false);
  };

 
  if (notes.length == 0) {
    return (
      <section className='h-screen overflow-hidden py-8'>
          <article className='flex flex-col gap-5 items-center'>
             <AddNotes />
          <div className='font-semibold text-3xl text-slate-400' >
            Notes Not Available
          </div>
        </article>      
    </section>
  )
  };

  return (
      <section className='h-screen overflow-hidden py-8'>
          <article className='flex flex-col gap-5 items-center'>
        {showUpdate?<UpdateNotes/>:<AddNotes />}
             <div className='flex flex-wrap  w-full justify-center gap-14 items-start h-[70vh] overflow-y-auto py-4 pb-11'>
          {notes.map((note) => {
            return <div className=' relative border-2 p-5 flex  flex-col gap-4 rounded-md shadow-sm shadow-sky-500 w-[90%] lg:w-[40%] xl:w-[25%] hover:shadow-lg hover:shadow-sky-200 scale-110'>
                  <h2 className='font-bold text-2xl'>{note.title}</h2>
                <p className='text-slate-500 h-40 shadow-md p-3 overflow-y-auto'>{note.description}</p>
                <div className='absolute gap-4 top-2 right-2 flex' >
                <p className='text-slate-500'>{note.date}</p>
                <p className='text-slate-500'>{ note.time}</p>
              </div>
                {note.reminderTime}
                {/* buttons */}
                <div className='flex justify-around font-semibold'>
                  <button onClick={()=>handleDelete(note.id)} className='bg-red-300 text-white px-2 py-1 rounded-md hover:bg-red-500'>Delete</button>
                  <button onClick={()=>handleUpdate(note.id)} className='bg-sky-300 text-white px-2 py-1 rounded-md hover:bg-sky-500'>Edit</button>
                  <button onClick={()=>handleReminder(note.id)}  className='bg-yellow-300 text-white px-2 py-1 rounded-md hover:bg-yellow-400'>Reminder</button>
 
              </div>
                </div>
          })} 
          </div>
      </article> 
      
      {/* -------Reminder form------------ */}
      
      {showRemForm &&
        <section className='bg-slate-100 border-l-2 h-screen fixed top-0 right-0 w-48 z-40'>
          <button onClick={() => setShowRemForm(false)} className='border-2 w-8 fixed right-4 top-4 h-8 rounded-full'>X</button>
          <article className=''>
            
            <form className='flex flex-col gap-8 py-16 items-center' onSubmit= {handleReminderSubmit}>
            <caption className='font-semibold text-lg'>Set Reminder Time</caption>
              <input type="time" className='w-[70%]' value={time} onChange={(e)=>{setTime(e.target.value)}} />
              <button className='py-1 px-3 border-2 hover:bg-indigo-500'>Set Reminder</button>
            </form>
          </article>
        </section>}
    </section>
  )
}

export default GetAllNotes