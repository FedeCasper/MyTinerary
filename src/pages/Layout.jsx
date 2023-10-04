import React from 'react'
import { Header } from '../components/Header'


export const Layout = () => {
     return (
          <div>
               <Header />
               <nav>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
               </nav>
               <main></main>
               <footer></footer>
          </div>
     )
}
