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




class Registro2 extends React.Component{ 

    render(){
        return(
        <div className="form">
            <div className="form-body">                

                <h3>Datos De Documentos de Acta de nacimiento</h3>

                <div className="curp">
                    <label className="form__label" for="a_Pat">Acta</label>
                    <input className="form__input" type="text" id="pais_r" placeholder="01"/>
                </div>
                <div className="curp">
                    <label className="form__label" for="a_Pat">Libro</label>
                    <input className="form__input" type="text" id="pais_r" placeholder="--"/>
                </div>
                <div className="curp">
                    <label className="form__label" for="a_Pat">Folio</label>
                    <input className="form__input" type="text" id="pais_r" placeholder="012532"/>
                </div>
                <div className="curp">
                    <label className="form__label" for="a_Pat">Entidad</label>
                    <input className="form__input" type="text" id="pais_r" placeholder="NE"/>
                </div>
                <div className="curp">
                    <label className="form__label" for="a_Pat">Oficialia</label>
                    <input className="form__input" type="text" id="pais_r" placeholder="012"/>
                </div>              

                <div className="fecha_n">
                    <label className="form__label" for="a_Pat">Fecha de registro</label>
                    <input className="form__input" type="text" id="pais_r" placeholder="18/07/1998"/>
                </div>
                <h3>Datos De Documentos de Acta de nacimiento</h3>
                <div className="curp">
                    <label className="form__label" for="a_Pat">Clave de Elector</label>
                    <input className="form__input" type="text" id="pais_r" placeholder="BEN4234DRF345"/>
                </div>
                <div className="curp">
                    <label className="form__label" for="a_Pat">Año registro</label>
                    <input className="form__input" type="text" id="pais_r" placeholder="BEN4234DRF345"/>
                </div>
                <div className="curp">
                    <label className="form__label" for="a_Pat">CIC</label>
                    <input className="form__input" type="text" id="pais_r" placeholder="32434DRF345"/>
                </div>
                <div className="curp">
                    <label className="form__label" for="a_Pat">COC</label>
                    <input className="form__input" type="text" id="pais_r" placeholder="4324345DRF345"/>
                </div>     

                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <Link to="/registro"><a class="myButton">Anterior</a></Link>
                <Link to="/account"><a class="myButton">Registrarse</a></Link>
            </div>
        </div>      
        )   
    }
       
}
export default Registro2;