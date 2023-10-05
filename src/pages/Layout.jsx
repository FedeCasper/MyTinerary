import React from 'react'
import { Header } from '../components/Header.jsx'
import { MainContainer } from '../components/MainContainer.jsx'
import { Footer } from '../components/Footer.jsx'


export const Layout = () => {
     return (
          <div className='flex flex-col min-h-screen'>
               <Header />
               <MainContainer />
               <Footer />
          </div>
     )
}
