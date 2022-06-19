import {useState} from 'react';
import Calendar from 'react-calendar'; 
import '../App.css';

function Cita2() {
 const [date, setDate] = useState(new Date())

return (
 <div className="app">
    <div className="text-center">

      <h1>Folio Tramite: 123456789</h1>

      <div className='contenedor-programar-cita'>
        <h2> Programar cita:</h2>
        <div className='programar-cita'>
          <div className='Letras'>

          Estado:
          </div><br></br>
            <select className="Estados" id="edos">
              <option value="default">Selecciona</option>
              <option value="Guadalajara">Guadalajara</option>
              <option value="Morelos">Morelos</option>
              <option value="Chiapas">Chiapas</option>
            </select><br></br>
          
          <div className='Letras'>
          Oficinas:
          </div><br></br>
          <select className="Oficinas" id="ofi">
              <option value="default">Selecciona</option>
              <option value="Guadalajara">Guadalajara</option>
              <option value="Morelos">Morelos</option>
              <option value="Chiapas">Chiapas</option>
            </select><br></br>
            <div>
            <button className='Boton'>Buscar cita</button>
            </div>
            
        </div>
        
      </div><br></br>
      
    </div>

   <div className="calendar-container">
      <Calendar onChange={setDate} 
      value={date}
      nextLabel='Siguiente'
      prevLabel='Anterior'/>
   </div>
   
 </div>
  )

}

export default  Cita2;