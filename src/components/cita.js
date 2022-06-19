import { Outlet, Link } from "react-router-dom"
import uno from "../layouts/uno.png"
import dos from "../layouts/dos.png"
import tres from "../layouts/tres.png"
import Select from 'react-select'

const options = [
    { value: 'a', label: 'Expedicion de pasaporte Primera Vez' },
    { value: 'b', label: 'Renovación de pasaporte ' },
]
const options2 = [
    { value: 'a', label: 'CDMX' },
    { value: 'b', label: 'Guadalajara' },
]
const options3 = [
    { value: 'a', label: 'Centro' },
    { value: 'b', label: 'Coyoacan' },
]


const Cita = () => {
    return(      
        <>
        
        <div className="caja2">
            Selección de lugar
        </div>
        <div className="opciones">
            <div className="caja">
                    <label className="form__label" for="a_Pat">Tipo de trámite</label>
                    <Select options={options} />
            </div>
            <div className="caja">
                    <label className="form__label" for="a_Pat">Tipo de trámite</label>
                    <Select options={options2} />
            </div>
            <div className="caja">
                    <label className="form__label" for="a_Pat">Tipo de trámite</label>
                    <Select options={options3} />
            </div>
        </div>
        <div className="caja2">
            Puedes seleccionar entre estos lugares
        </div>
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
            <Link to="/cita2"><a class="myButton">Seleccionar Horario</a></Link>    
        </div>  

        </>


     
    )
}
export default Cita