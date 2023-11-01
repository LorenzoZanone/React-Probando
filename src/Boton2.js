import React, { useState, useEffect } from "react";
import "./Estilos.css";
export function Boton2() {
  const [variable, modificarVariable] = useState(0);
  useEffect(function () {
    console.log("cambio la varibale");
    modificarVariable(10000);
  }, []);
  return (
    <div>
      <input onChange={(e) => e.target.value} />
      <button
        className="boton"
        onClick={function () {
          modificarVariable(variable + 1);
          alert("El Mensaje es" + variable);
        }}
      >
        SUMAR
      </button>

      <h1>Valor del boton {variable}</h1>

      <button
        className="boton"
        onClick={function () {
          modificarVariable(variable - 1);
        }}
      >
        Restar{" "}
      </button>

      <button
        className="boton"
        onClick={function () {
          modificarVariable(variable * 2);
        }}
      >
        Sumar por 2
      </button>
    </div>
  );
}

function Cambio() {
  return (
    <div>
      <h1>Cambio la variable</h1>
    </div>
  );
}
