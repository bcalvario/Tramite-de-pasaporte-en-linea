import React, {useState} from 'react';
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Outlet, Link } from "react-router-dom"





const options = [
    { value: 'ON', label: 'Oficinas Nacionales' },
    { value: 'OC', label: 'Oficinas Consulares' },
]
const sexo = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Femenino' },

]




class Registro extends React.Component{ 

    render(){
        return(
        <div className="form">
            <div className="form-body">
                    <h3>Datos Personales</h3>
                <div className="username">
                    <label className="form__label" for="firstName">Nombre</label>
                    <input className="form__input" type="text" id="firstName" placeholder="Nombre"/>
                </div>
                <div className="a_Pat">
                    <label className="form__label" for="a_Pat">Apellido Paterno</label>
                    <input className="form__input" type="text" id="firstName" placeholder="Apellido Paterno"/>
                </div>
                <div className="a_MAt">
                    <label className="form__label" for="a_Pat">Apellido Materno</label>
                    <input className="form__input" type="text" id="firstName" placeholder="Apellido Materno"/>
                </div>

                <div className="sexo">
                    <label className="form__label" for="a_Pat">Sexo</label>
                    <Select options={sexo} />
                </div>
                <div className="tel_1">
                    <label className="form__label" for="a_Pat">Telefono principal</label>
                    <input className="form__input" type="text" id="firstName" placeholder="5542332345"/>
                </div>
                <div className="tel_2">
                    <label className="form__label" for="a_Pat">Telefono secundario</label>
                    <input className="form__input" type="text" id="firstName" placeholder="5542332345"/>
                </div>
                <div className="tramite">
                    <label className="form__label" for="a_Pat">Tipo de trámite</label>
                    <Select options={options} />
                </div>
                <h3>Datos De nacionalidad</h3>

                <div className="pais_r">
                    <label className="form__label" for="a_Pat">Pais de residencia</label>
                    
                    <input className="form__input" type="text" id="pais_r" placeholder="México"/>
                </div>

              
                <div className="estado_r">
                    <label className="form__label" for="a_Pat">Estado</label>
                    <input className="form__input" type="text" id="estado_r" placeholder="CDMX"/>
                </div>

                <div className="pais_n">
                    <label className="form__label" for="a_Pat">Pais de nacimiento</label>
                    <input className="form__input" type="text" id="pais_r" placeholder="México"/>
                </div>

                <div className="fecha_n">
                    <label className="form__label" for="a_Pat">Fecha de nacimiento</label>
                    <input className="form__input" type="text" id="pais_r" placeholder="18/07/1998"/>
                </div>

                <h3>Datos De Documentos de Registro</h3>

                <div className="curp">
                    <label className="form__label" for="a_Pat">Fecha de nacimiento</label>
                    <input className="form__input" type="text" id="pais_r" placeholder="Curp"/>
                </div>

                
            </div>
            <div class="footer">
                <Link to="/registro2"><a class="myButton">Siguiente</a></Link>
            </div>
        </div>      
        )   
    }
       
}
export default Registro;