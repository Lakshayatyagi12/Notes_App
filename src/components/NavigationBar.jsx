import React from 'react'
import { FaGithub ,FaLinkedinIn ,FaInstagram  } from "react-icons/fa";

const NavigationBar = () => {
  return (
      <section className=' text-white font-semibold py-3 flex justify-center bg-gradient-to-r from-indigo-500 to-sky-500'>
          <article className='w-[80%] flex justify-between'>
              <h1 className='font-semibold text-2xl p-1 '>Lakshaya Tyagi</h1>
              <nav className='flex'>
               <ul className='flex gap-4 md:gap-5 lg:gap-6 xl:gap-8'>
                    <li className='font-semibold text-4xl p-1 hover:bg-[#24292f] rounded-full '><a href="https://github.com/Lakshayatyagi12"><FaGithub /></a></li>
                    <li className='font-semibold text-4xl hover:bg-[#0A66C2] rounded-sm p-1 '><a href="https://www.linkedin.com/in/lakshaya-tyagi-5a03971a6/"><FaLinkedinIn /></a></li>
                    <li className='font-semibold text-4xl p-1 hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-md '><a href="https://www.instagram.com/thelakshayatyagi/"><FaInstagram /></a></li>  
              </ul>
              </nav> 
          </article>
   </section>
  )
}

export default NavigationBar




// CSS Linear Gradient Code
// /* Instagram CSS Linear Gradient Background */
// .gradient {
//   background: #833ab4;
//   background: linear-gradient(
//     to right,
//     #833ab4,#fd1d1d,#fcb045
//   );
// }
// TailwindCSS Logo TailwindCSS Linear Gradient
// /* Instagram TailwindCSS Linear Gradient */
// <div class="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"></div>