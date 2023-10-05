import React, { useEffect, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const Carrousel = () => {
  const [data, setData] = useState([]);
  function traerDatos() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
      .then((response) => response.json())
      .then((data) => {
        let arrayOfTwelve = data.events.slice(0, 12);
        setData(arrayOfTwelve);
      });
  }
  useEffect(traerDatos, []);
  console.log(data);

  return (
    <div className="flex w-full p-2 gap-2 border border-red-700 h-[30vh]">
      <ArrowCircleLeftIcon
        fontSize="large"
        className=" text-stone-600 self-center hover:scale-110 hover:text-purple-700 cursor-pointer"
        onClick={() => console.log("Izquierda")}
      />
      <span className=" inline-grid grid-cols-2 grow gap-2">
        <div className=" bg-orange-200">Div1</div>
        <div className=" bg-indigo-300 ">Div2</div>
        <div className=" bg-fuchsia-200 ">Div3</div>
        <div className=" bg-teal-100">Div4</div>
      </span>
      <ArrowCircleRightIcon
        fontSize="large"
        className=" text-stone-600 self-center hover:scale-110 hover:text-purple-700 cursor-pointer"
        onClick={() => console.log("Derecha")}
      />
    </div>
  );
};
