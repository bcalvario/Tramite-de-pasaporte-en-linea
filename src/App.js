import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBarExample from './layouts/navbar';
import Account from './components/account';
import Account_Admin from './components/account_admin';
import Registro from './components/registro';
import Registro2 from './components/registro2';
import Cita from './components/cita';
import Cita2 from './components/cita2';
import Cita3 from './components/cita3';
import 'react-calendar/dist/Calendar.css';
import Exito from './components/exito';


function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Home /> } />
    <Route path='account' element={ <Account /> } />
    <Route path='account_admin' element={ <Account_Admin /> } />
    <Route path='registro' element={ <Registro /> } />
    <Route path='registro2' element={ <Registro2 /> } />
    <Route path='cita' element={ <Cita /> } />
    <Route path='cita2' element={ <Cita2 /> } />
    <Route path='cita2/cita3' element={ <Cita3 /> } />
    <Route path='cita2/cita3/exito' element={ <Exito /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;