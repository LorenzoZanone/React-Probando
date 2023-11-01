import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";
import "./Estilos.css";
import { Boton } from "./boton";
import { Mostar } from "./mostar";
import { Boton2 } from "./Boton2";
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <Llamar></Llamar>
    <Boton></Boton>
    <Boton2></Boton2>
    <Mostar name="Lolo" edad={12}></Mostar>
  </>
);
function Llamar() {
  return (<Saludar></Saludar>)
}

function Saludar() {
  return (
    <div>
      <h1 style={{ color: "#1212" }}>HOLA A TODOS</h1>
    </div>
  );
}
