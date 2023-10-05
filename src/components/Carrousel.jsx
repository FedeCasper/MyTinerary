import React, { useEffect, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const Carrousel = () => {
  const [data, setData] = useState([]);
  function traerDatos() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then((response) => response.json())
      .then((data) => {
        let arrayOfTwelve = data.events.slice(0, 4);
        setData(arrayOfTwelve);

        function creadoraDeArray(){
          let slides = ['slide1','slide2','slide3']
          let indice = 1
          let array = []
          let arrayCreado =  slides.map(slide => {
            array[indice] = []
            for(let evento of data.events){
              if(array[indice].length <= 3 && !array[indice].includes(evento)){
                array[indice].push(evento)
              }
            }
            return array[indice]
          })
          return arrayCreado
        }
        console.log(creadoraDeArray());
      });
  }


  const arraySlide = [1,2,3]
  useEffect(traerDatos, []);
  console.log(data.length);
  // console.log(data[0].image);

  return (
    <div className="flex w-full p-2 gap-2 border border-red-700 h-[30vh]">
      <ArrowCircleLeftIcon
        fontSize="large"
        className=" text-stone-600 self-center hover:scale-110 hover:text-purple-700 cursor-pointer"
        onClick={() => console.log("Izquierda")}
      />
      { arraySlide.map(slide => 
        <span className=" inline-grid grid-cols-2 grow gap-2" >
          { data.length > 0 && data.map(evento => <div key={evento.name} style={{backgroundImage: `url('${evento.image}')`}}>Lleno</div>) }
        </span>
        ) }
      <ArrowCircleRightIcon
        fontSize="large"
        className=" text-stone-600 self-center hover:scale-110 hover:text-purple-700 cursor-pointer"
        onClick={() => console.log("Derecha")}
      />
    </div>
  );
};
