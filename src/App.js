import { useState } from 'react'; //por buena practica se importa primero los hooks, y se utiliza dentro de un componente o fucnion
import './App.css';
import Header from "./componentes/Header/Header"
import MiOrg from './componentes/MiOrg/MiOrg';
import Formulario from './Formulario/Formulario';
import Equipo from './componentes/Equipo/Equipo';
import Colaborador from './componentes/Colaborador/Colaborador';
import Footer from './componentes/Footer/Fotter';


function App() {
  const [mostrarFormulario, actualizarMostrar]= useState(false) //cambiar a true para que muestre formulario
  const [colaboradores, actualizarColaboradores] = useState([{
    nombre: "Esther Ortegon",
    cargo: "Tutor",
    equipo: "Programacion",
    foto:   "http://www.github.com/str26.png"
  }])

  //Ternario ---> condicion si es verdadera seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador)
    //Spread operator - propagacion
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Lista de ListadeEquipos
  const equipos = [
    
    {
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "FrontEnd",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Datascience",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Mobil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Inovaccion y gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }     
]

return (
    <div>
      <Header />
      {/*operador ternario-/*mostrarFormulario ?  /> : <></>}   {/*mostrarFormulario === true ? <Formulario /> : <div></div>} simplificar codigo*/} 
     {
     mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador = {registrarColaborador}
        />
      }  
     
      <MiOrg cambiarMostrar={cambiarMostrar}/>{}
      
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores = {colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
          />
          )
      }

      <Footer />

    </div>
  );
}

export default App;
