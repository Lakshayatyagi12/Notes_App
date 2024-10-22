import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotesProvider from './contextApi/NotesProvider';
import GetAllNotes from './notes/GetAllNotes';
import NavigationBar from './components/NavigationBar';

function App() {
  // const [count, setCount] = useState(0);
  // let handleClick = () => {
  //   setCount(count + 1);
  //   setCount((perviousValue) => perviousValue+1)
  // }
  // let handleDecrement = () => {
  //   {count === 0 ? 0 :setCount((perviousValue)=>perviousValue-1)}
  // }
  const [userActive, setUserActive] = useState("false");
  return (
    <>
      {/* <section className='bg-black h-screen flex justify-center items-center'>
        <article className='text-white border-2 p-8 rounded-md shadow-slate-400'>
        {userActive ? <Login /> : <SignUp />}
        {userActive?<button className='text-red-600 text-right w-full font-semibold hover:font-extrabold mt-11' onClick={()=>setUserActive(false)}>Sign Up</button>:<button className='text-red-600 text-right w-full font-semibold hover:font-extrabold mt-11' onClick={()=>setUserActive(true)}>Login!</button>}
      </article>
      </section> */}

      <NotesProvider>
        <NavigationBar />
        <main className='py-7'>
          <GetAllNotes />
          </main>
      </NotesProvider>
      </>
      
  )
}

export default App
