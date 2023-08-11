import { useState } from 'react'; //por buena practica se importa primero los hooks, y se utiliza dentro de un componente o fucnion
import './App.css';
import Header from "./componentes/Header/Header"
import MiOrg from './componentes/MiOrg/MiOrg';
import Formulario from './Formulario/Formulario';




function App() {
  const [mostrarFormulario, actualizarMostrar]= useState(true)

  //Ternario ---> condicion si es verdadera seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
     {mostrarFormulario && <Formulario />}  {/*mostrarFormulario ? <Formulario /> : <></>}   {/*mostrarFormulario === true ? <Formulario /> : <div></div>} simplificar codigo*/ }
  
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
  }

export default App;
