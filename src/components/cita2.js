import { useState } from "react";
import Calendar from "react-calendar";
import "../App.css";
import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";

function Cita2() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <div className="text-center">
        <h1>Folio Tramite: 123456789</h1>

        <div className="contenedor-programar-cita">
          <h2> Programar cita:</h2>
          <div className="programar-cita">
            <div className="Letras">Estado:</div>
            <br></br>
            <select className="Estados" id="edos">
              <option value="default">Selecciona</option>
              <option value="Guadalajara">Aguascalientes</option>
              <option value="Morelos">Baja California</option>
              <option value="Chiapas">Baja California Sur</option>
              <option value="Chiapas">Campeche</option>
              <option value="Chiapas">Chiapas</option>
              <option value="Chiapas">Chihuahua</option>
              <option value="Chiapas">Ciudad de México</option>
              <option value="Chiapas">Coahuila</option>
              <option value="Chiapas">Colima</option>
              <option value="Chiapas">Durango</option>
              <option value="Chiapas">Guanajato</option>
              <option value="Chiapas">Guerrero</option>
              <option value="Chiapas">Hidalgo</option>
              <option value="Chiapas">Jalisco</option>
              <option value="Chiapas">Estado de México</option>
              <option value="Chiapas">Michoacán</option>
              <option value="Chiapas">Morelos</option>
              <option value="Chiapas">Nayarit</option>
              <option value="Chiapas">Nuevo León</option>
              <option value="Chiapas">Oaxaca</option>
              <option value="Chiapas">Puebla</option>
              <option value="Chiapas">Querétaro</option>
              <option value="Chiapas">Quintana Roo</option>
              <option value="Chiapas">San Luis Potosí</option>
              <option value="Chiapas">Sinaloa</option>
              <option value="Chiapas">Sonora</option>
              <option value="Chiapas">Tabasco</option>
              <option value="Chiapas">Tamaulipas</option>
              <option value="Chiapas">Tlaxcala</option>
              <option value="Chiapas">Veracruz</option>
              <option value="Chiapas">Yucatán</option>
              <option value="Chiapas">Zacatecas</option>
            </select>
            <br></br>

            <div className="Letras">Oficinas:</div>
            <br></br>
            <select className="Oficinas" id="ofi">
              <option value="default">Selecciona</option>
              <option value="Guadalajara">Aguascalientes</option>
              <option value="Morelos">Baja California</option>
              <option value="Chiapas">Baja California Sur</option>
              <option value="Chiapas">Campeche</option>
              <option value="Chiapas">Chiapas</option>
              <option value="Chiapas">Chihuahua</option>
              <option value="Chiapas">Ciudad de México</option>
              <option value="Chiapas">Coahuila</option>
              <option value="Chiapas">Colima</option>
              <option value="Chiapas">Durango</option>
              <option value="Chiapas">Guanajato</option>
              <option value="Chiapas">Guerrero</option>
              <option value="Chiapas">Hidalgo</option>
              <option value="Chiapas">Jalisco</option>
              <option value="Chiapas">Estado de México</option>
              <option value="Chiapas">Michoacán</option>
              <option value="Chiapas">Morelos</option>
              <option value="Chiapas">Nayarit</option>
              <option value="Chiapas">Nuevo León</option>
              <option value="Chiapas">Oaxaca</option>
              <option value="Chiapas">Puebla</option>
              <option value="Chiapas">Querétaro</option>
              <option value="Chiapas">Quintana Roo</option>
              <option value="Chiapas">San Luis Potosí</option>
              <option value="Chiapas">Sinaloa</option>
              <option value="Chiapas">Sonora</option>
              <option value="Chiapas">Tabasco</option>
              <option value="Chiapas">Tamaulipas</option>
              <option value="Chiapas">Tlaxcala</option>
              <option value="Chiapas">Veracruz</option>
              <option value="Chiapas">Yucatán</option>
              <option value="Chiapas">Zacatecas</option>
            </select>
            <br></br>
            <div className="container">
              <button className="Boton">Buscar cita</button>
            </div>
          </div>
        </div>
        <br></br>
      </div>

      <div className="calendar-container">
        <div className="container">
          <Calendar
            onChange={setDate}
            value={date}
            nextLabel="Siguiente"
            prevLabel="Anterior"
          />
        </div>
        <div>
          <Link to="/cita2/cita3">
            <div className="container">
              <a class="myButton">Seleccionar Horario</a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cita2;
