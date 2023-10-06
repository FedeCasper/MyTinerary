import React, { useEffect, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const Carrousel = () => {
  const [dataEvents, setDataEvents] = useState([]);
  const [arrayDeSlides, setArrayDeSlides] = useState([]);
  const [indice, setIndice] = useState(0);

  function traerDatos() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then((response) => response.json())
      .then((data) => {
        setDataEvents(data.events);
      });
  }

  function creadoraDeArray(dataEvents) {
    let arrauyAux = ["slide1", "slide2", "slide3"];
    let nuevoArray = [];
    let acc = 0;
    let arrayCreado = arrauyAux.map((slide) => {
      nuevoArray = [];
      for (let evento of dataEvents) {
        if (nuevoArray.length <= 3 && !nuevoArray.includes(evento)) {
          nuevoArray.push(dataEvents[acc]);
          acc++;
        }
      }
      return nuevoArray;
    });
    setArrayDeSlides(arrayCreado);
  }

  function modificarIndice(valorIndice){
    if(valorIndice == 2){
      setIndice(0)
    }else{
      setIndice(valorIndice+1)
    }
  }

  useEffect( () => {
    traerDatos()
  }, [] );

  useEffect(() => {
    dataEvents &&
    creadoraDeArray(dataEvents)
  }, [dataEvents] )

  console.log("arrayDeSlides: ", arrayDeSlides);
  console.log("dataEvents: ", dataEvents);

  return (
    <div className="flex w-full p-2 gap-2 h-[50vh]">
      <ArrowCircleLeftIcon
        fontSize="large"
        className=" text-stone-600 self-center hover:scale-110 hover:text-purple-700 cursor-pointer"
        onClick={() => modificarIndice(indice)}
      />
      {arrayDeSlides.length > 0 &&
          <span className=" inline-grid grid-cols-2 grow gap-2">
            {dataEvents.length > 0 &&
              arrayDeSlides[indice].map((evento) => (
                <div className="flex justify-center group grayscale-[60%] hover:grayscale-0 rounded-md drop-shadow-lg" key={evento.name} style={{ backgroundImage: `url('${evento.image}')`, backgroundSize: 'cover' }}>
                  <h2 className=" drop-shadow-lg text-lg self-end bg-gradient-to-r from-sky-500 to-indigo-500 w-full  opacity-90 group-hover:bg-gradient-to-l  group-hover:text-orange-300">{evento.name}</h2>
                </div>
              ))}
          </span>
      }
      <ArrowCircleRightIcon
        fontSize="large"
        className=" text-stone-600 self-center hover:scale-110 hover:text-purple-700 cursor-pointer"
        onClick={() => modificarIndice(indice)}
      />
    </div>
  );
};
