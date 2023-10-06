import React from "react";
import { Carrousel } from "./Carrousel.jsx";

export const MainContainer = () => {
     return (
          <main className=" flex flex-col bg-blue-200 grow">
               <section className=" h-[95vh] flex flex-col justify-start gap-12 pt-12" style={{ backgroundImage: `url('src/assets/river.jpg')` , backgroundSize: 'cover' }}>
                    <h1 className=" text-8xl font-extrabold tracking-tight  text-orange-300 drop-shadow-lg">MyTinerary</h1>
                    <h3 className=" text-3xl">
                         Find your perfect trip, designed by insiders who know and love their
                         cities!
                    </h3>
               </section>
               {/* style={{ backgroundImage: `url('src/assets/city.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} */}
               <section className=" h-[100vh] flex flex-col justify-center gap-24" style={{ backgroundImage: `url('src/assets/relax.jpg')` , backgroundSize: 'cover' }}>
                    <section className=" flex flex-col justify-evenly self-center flex-wrap content-around gap-6 text-stone-700 rounded-md p-4 w-3/4 h-[40vh] bg-slate-50 bg-teal-100/50" >
                         <h1 className=" text-3xl font-extrabold tracking-tight">Explore the destination of your dreams!</h1>
                         <p className=" text-sm w-2/3">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo eius eum
                              obcaecati quidem, fuga perspiciatis? Odit fugiat porro officia! Eum
                              harum dicta, eveniet eligendi sit enim adipisci nihil dignissimos?
                              Eius? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo eius eum
                              obcaecati quidem, fuga perspiciatis? Odit fugiat porro officia! Eum
                              harum dicta, eveniet eligendi sit enim adipisci nihil dignissimos?
                              Eius?
                         </p>
                         <button className="rounded-xl w-1/3 self-center border-0 bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 text-base font-medium text-white transition duration-200 hover:shadow-md hover:shadow-[#6025F5]/50">
                              Cities
                         </button>
                    </section>
               </section>
               <section className=" h-[100vh] flex flex-col justify-center gap-24" style={{ backgroundImage: `url('src/assets/landscape.jpg')` , backgroundSize: 'cover' }}>
                    <h2 className=" text-3xl text-slate-800 font-extrabold tracking-tight">Popular MyTineraries!</h2>
                    <Carrousel />
               </section>

          </main>
     );
};
