import React from "react";
import { Carrousel } from "./Carrousel.jsx";

export const MainContainer = () => {
     return (
          <main className=" bg-blue-200 grow p-4">
               <section className=" text-stone-700 border border-red-600 p-4">
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
                    <button className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-2 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
                         Cities
                    </button>
               </section>

               <Carrousel />
          </main>
     );
};
