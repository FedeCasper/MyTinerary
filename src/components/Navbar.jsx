import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Navbar = () => {
     return (
          <nav className=' bg-lime-200 flex gap-8 justify-center'>
               <a href="#">Link 1</a>
               <a href="#">Link 2</a>
               <a href="#">Link 3</a>
               <AccountCircleIcon fontSize='large' className=' text-slate-600' />
          </nav>
     )
}
