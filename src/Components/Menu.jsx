import React from 'react'
import { NavLink } from 'react-router-dom'
const Menu = () => {
    return <>
    <div className='w-full h-fit bg-[#222] bg-opacity-80 py-[1rem] text-center overflow-hidden bg'>
        <div className='flex justify-center max-w-full relative mx-auto xl:px-[3rem] lg:px-[1.6rem]
        px-2  place-items-center'>
            <NavLink to={'/'}><h1 className='text-red-500 font-serif xl:text-2xl sm:text-lg  font-medium tracking-wide duration-300 delay-200 hover:underline underline-offset-8 md:text-xl md:px-5 lg:text-[1.50rem] xl:font-semibold  lg:font-medium'>E-Mail Extractor</h1></NavLink>
            <div className='flex-auto flex space-x-[2rem] justify-end overflow-hidden relative '>
                <NavLink to={'/login'}><button className=' text-red-500 border-[0.01rem] border-red-500 font-medium xl:text-lg text-sm  xl:px-8 px-3 xl:py-2 py-1 font-serif hover:bg-red-500 duration-500 delay-200 hover:text-white hover:border-white drop-shadow-xl shadow-sm md:text-lg md:px-5 md:py-1 lg:px-6 lg:py-2 '>Login</button></NavLink>
                <NavLink to={'/register'}><button className=' text-red-500 border-[0.01rem] border-red-500 font-medium xl:text-lg text-sm xl:px-8 px-3  xl:py-2 py-1 font-serif hover:bg-red-500 duration-500 delay-200 hover:text-white hover:border-white drop-shadow-xl shadow-sm md:text-lg md:px-5 md:py-1 lg:px-6 lg:py-2'>SignUp</button></NavLink>
            </div>
        </div>        
    </div>

    </>
  }
export {Menu}