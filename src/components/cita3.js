import { Outlet, Link } from "react-router-dom"
const Cita3 = () => {
    return(
        <>
        <div>
            <h1>Julio 26 2022</h1>
        </div>
        <div className="horario">
            <div className="columna">
                <div> Julio 25 2022 </div>
                <div> <a class="but_horario">10:00</a> </div>
                <div> <a class="but_horario">10:30</a> </div>
                <div> <a class="but_horario2">11:00</a> </div>
                <div> <a class="but_horario">11:30</a> </div>
                <div> <a class="but_horario">1:00</a>  </div>               
                <div> <a class="but_horario2">1:30</a>  </div>              


            </div> 
            <div className="columna">
                <div> Julio 26 2022 </div>
                <div> <a class="but_horario2">10:00</a> </div>
                <div> <a class="but_horario">10:30</a> </div>
                <div> <a class="but_horario2">11:00</a> </div>
                <div> <a class="but_horario">11:30</a> </div>
                <div> <a class="but_horario">1:00</a>  </div>               
                <div> <a class="but_horario2">1:30</a>  </div>              


            </div>  
            <div className="columna">
                <div> Julio 27 2022 </div>
                <div> <a class="but_horario2">10:00</a> </div>
                <div> <a class="but_horario">10:30</a> </div>
                <div> <a class="but_horario2">11:00</a> </div>
                <div> <a class="but_horario">11:30</a> </div>
                <div> <a class="but_horario">1:00</a>  </div>               
                <div> <a class="but_horario2">1:30</a>  </div>              


            </div> 
            <div className="columna">
                <div> Julio 28 2022 </div>
                <div> <a class="but_horario2">10:00</a> </div>
                <div> <a class="but_horario">10:30</a> </div>
                <div> <a class="but_horario2">11:00</a> </div>
                <div> <a class="but_horario">11:30</a> </div>
                <div> <a class="but_horario">1:00</a>  </div>               
                <div> <a class="but_horario2">1:30</a>  </div>              


            </div>  
            <div className="columna">
                <div> Julio 29 2022 </div>
                <div> <a class="but_horario2">10:00</a> </div>
                <div> <a class="but_horario">10:30</a> </div>
                <div> <a class="but_horario2">11:00</a> </div>
                <div> <a class="but_horario">11:30</a> </div>
                <div> <a class="but_horario2">1:00</a>  </div>               
                <div> <a class="but_horario">1:30</a>  </div>              


            </div>   
        </div>
        <div>
        <Link to="/cita2/"><a class="myButton">Anterior</a></Link>  
        <Link to="/cita2/cita3/exito"><a class="myButton">Registrar cita</a></Link>  
        </div>

        </>
    )
}
export default Cita3