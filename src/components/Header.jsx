import React from 'react'
import { Navbar } from './Navbar'

export const Header = () => {
     return (
          <header className=' bg-slate-100 h-[20]'>
               <div className='flex justify-center'>
                    <img className='h-32' src="src/assets/logo-mockup.png" alt="" />
                    <h1 className="text-3xl font-bold underline text-red-600">
                         Hello world!
                    </h1>
               </div>
               <Navbar />
          </header>
     )
}
