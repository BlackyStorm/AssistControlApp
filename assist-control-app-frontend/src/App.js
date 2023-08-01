import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmpleadosComponent from './components/ListEmpleadosComponent';
import AddEmpleadoComponent from './components/AddEmpleadoComponent';
import AddCargoComponent from './components/AddCargoComponent';
import AddTipoContratoComponent from './components/AddTipoContratoComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent/>
        <div className='container'>
          <Routes>
          <Route exact path='/' element={<ListEmpleadosComponent/>}></Route>
          <Route  path='/empleados' element={<ListEmpleadosComponent/>}></Route>
          <Route  path='/add-empleados' element={<AddEmpleadoComponent/>}></Route>
          <Route  path='/add-cargo' element={<AddCargoComponent/>}></Route>
          <Route  path='/add-tipo-contrato' element={<AddTipoContratoComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
