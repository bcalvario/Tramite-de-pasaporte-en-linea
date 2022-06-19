import { Outlet, Link } from "react-router-dom"

const Exito = () => {
    return(
        <>
        <div>
            <h1>Registro exitoso</h1>
            <h3>Nombre: Ricardo Bernabe Nicolas</h3>
            <h3>Sede: Coyoacan</h3>
            <h3>Fecha Julio 26 1:00 </h3>
            <h3>Motivo: Registro Primera Vez</h3>
        </div>
        <div>
            <Link to="/account"><a class="myButton">Regresar a inicio</a></Link>  
        </div>
        </>

    )
}
export default Exito