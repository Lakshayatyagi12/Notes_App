import React, { useState } from 'react'

const Login = () => {
const [name, setName] = useState("");
const [password, setPassword] = useState("");
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(name);
  console.log(password);
}
return (
  <div className='flex gap-5 flex-col text-center'>
    <h1 className='text-2xl font-semibold'>User Login up form</h1>
    <form onSubmit={handleSubmit } className='flex flex-col gap-6 text-black'>
      <input type="text" placeholder="Username" value={name} onChange={(e) => {
        setName(e.target.value)
        
      }} />
      <input type="password" placeholder='Password' value={password} onChange={(e) => {
        setPassword(e.target.value);

      }} />
       <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>Submit</button>
    </form>

</div>
)
}

export default Login