import React from "react";
import { Carrousel } from "./Carrousel.jsx";

export const MainContainer = () => {
     return (
          <main className=" flex flex-col gap-10 bg-blue-200 grow p-4">
               <section className=" flex flex-col gap-6 text-stone-700 rounded-md p-4" style={{ backgroundImage: `url('src/assets/city.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                    <h1 className=" text-2xl">MyTinerary</h1>
                    <h3 className=" text-lg">
                         Find your perfect trip, designed by insiders who know and love their
                         cities!
                    </h3>
                    <p className=" text-sm">
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo eius eum
                         obcaecati quidem, fuga perspiciatis? Odit fugiat porro officia! Eum
                         harum dicta, eveniet eligendi sit enim adipisci nihil dignissimos?
                         Eius?
                    </p>
                    <button className="rounded-xl w-1/3 self-center border-0 bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 text-base font-medium text-white transition duration-200 hover:shadow-md hover:shadow-[#6025F5]/50">
                         Cities
                    </button>
               </section>

               <Carrousel />
          </main>
     );
};
