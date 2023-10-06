import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Navbar = () => {
     return (
          <nav className=' flex bg-gradient-to-r from-sky-500 to-indigo-500 gap-8 justify-center py-2'>
               <a href="#" className=' self-center'>Link 1</a>
               <a href="#" className=' self-center'>Link 2</a>
               <a href="#" className=' self-center'>Link 3</a>
               <AccountCircleIcon fontSize='medium' className='' />
          </nav>
     )
}
