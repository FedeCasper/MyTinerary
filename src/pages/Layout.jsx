import React from 'react'
import { Header } from '../components/Header.jsx'
import { Footer } from '../components/Footer.jsx'


export const Layout = (props) => {
     return (
          <div className='flex flex-col min-h-screen'>
               <Header />
                    {props.children}
               <Footer />
          </div>
     )
}
