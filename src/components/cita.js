import { Outlet, Link } from "react-router-dom";
import uno from "../layouts/uno.png";
import dos from "../layouts/dos.png";
import tres from "../layouts/tres.png";
import Select from "react-select";
import React, { Component } from "react";

const options = [
  { value: "a", label: "México" },
  { value: "b", label: "Otro" },
];

const options2 = [
  { value: "a", label: "Selecciona" },
  { value: "e", label: "Campeche" },
  { value: "f", label: "Chiapas" },
  { value: "g", label: "Chihuahua" },
  { value: "i", label: "Coahuila" },
  { value: "j", label: "Colima" },
  { value: "k", label: "Durango" },
  { value: "l", label: "Guanajato" },
  { value: "m", label: "Guerrero" },
  { value: "n", label: "Hidalgo" },
  { value: "o", label: "Jalisco" },
  { value: "q", label: "Michoacán" },
  { value: "r", label: "Morelos" },
  { value: "s", label: "Nayarit" },
  { value: "t", label: "Nuevo León" },
  { value: "u", label: "Oaxaca" },
  { value: "v", label: "Puebla" },
  { value: "z", label: "Sinaloa" },
  { value: "z2", label: "Sonora" },
  { value: "z3", label: "Tabasco" },
  { value: "z4", label: "Tamaulipas" },
  { value: "z5", label: "Tlaxcala" },
  { value: "z6", label: "Veracruz" },
  { value: "z7", label: "Yucatán" },
  { value: "z8", label: "Zacatecas" },
];
const options3 = [
  { value: "a", label: "Selecciona" },
  { value: "e", label: "Campeche" },
  { value: "f", label: "Chiapas" },
  { value: "g", label: "Chihuahua" },
  { value: "i", label: "Coahuila" },
  { value: "j", label: "Colima" },
  { value: "k", label: "Durango" },
  { value: "l", label: "Guanajato" },
  { value: "m", label: "Guerrero" },
  { value: "n", label: "Hidalgo" },
  { value: "o", label: "Jalisco" },
  { value: "q", label: "Michoacán" },
  { value: "r", label: "Morelos" },
  { value: "s", label: "Nayarit" },
  { value: "t", label: "Nuevo León" },
  { value: "u", label: "Oaxaca" },
  { value: "v", label: "Puebla" },
  { value: "z", label: "Sinaloa" },
  { value: "z2", label: "Sonora" },
  { value: "z3", label: "Tabasco" },
  { value: "z4", label: "Tamaulipas" },
  { value: "z5", label: "Tlaxcala" },
  { value: "z6", label: "Veracruz" },
  { value: "z7", label: "Yucatán" },
  { value: "z8", label: "Zacatecas" },
];

const Cita = () => {
  return (
    <>
      <div className="caja2">Selección de lugar</div>
      <div className="opciones">
        <div className="caja">
          <label className="form__label" for="a_Pat">
            *País:
          </label>
          <Select options={options} />
        </div>
        <div className="caja">
          <label className="form__label" for="a_Pat">
            *Estado:
          </label>
          <Select options={options2} />
        </div>
        <div className="caja">
          <label className="form__label" for="a_Pat">
            *Oficina:
          </label>
          <Select options={options3} />
        </div>
      </div>
      <div className="caja2">Puedes seleccionar entre estos lugares</div>
      <div className="opciones">
        <div className="caja">
          <div>
            <img src={uno} height={400} width={400} />
          </div>
          <div>
            <a class="myButton">Seleccionar</a>
          </div>
        </div>

        <div className="caja">
          <div>
            <img src={dos} height={400} width={400} />
          </div>
          <div>
            <a class="myButton">Seleccionar</a>
          </div>
        </div>

        <div className="caja">
          <div>
            <img src={tres} height={400} width={400} />
          </div>
          <div>
            <a class="myButton">Seleccionar</a>
          </div>
        </div>
      </div>
      <div className="footer">
        <Link to="/cita2">
          <a class="myButton">Seleccionar Horario</a>
        </Link>
      </div>
    </>
  );
};
export default Cita;
