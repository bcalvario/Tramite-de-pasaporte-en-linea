import CrudCitas from "./crudadmin"
import Crud from "./crud"
import { Outlet, Link } from "react-router-dom"
const Account = () => {
    return(
        <>
           <div class="Crud">
            <div class='left2'>      
            <h4>Citas </h4>     
            </div>
            <div class='right'>
            <Crud/> 
            </div>           
        </div>
        <div class="left2">
            <Link to="/cita"><a class="myButton">Agendar Cita</a></Link>
        </div>
        </>

    )
}
export default Account