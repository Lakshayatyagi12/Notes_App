import React from 'react'

const SignUp = () => {
  return (
      <div className='flex gap-5 flex-col text-center'>
          <h1 className='text-2xl font-semibold'>User Singned Up Page</h1>
          <form className='flex flex-col gap-6 text-black'>
              <input type='text' placeholder='Full Name' />
              <input type='text' placeholder='UserName' />
              <input type="password" placeholder='Password' />
              <button type='submit'onSubmit={handleSubmit }  className='bg-blue-500 text-white px-4 py-2 rounded-md'>Sign Up</button>
          </form>
    </div>
  )
}

export default SignUp