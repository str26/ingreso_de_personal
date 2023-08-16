import { useState } from 'react'; //por buena practica se importa primero los hooks, y se utiliza dentro de un componente o fucnion
import {v4 as uuid } from "uuid"
import './App.css';
import Header from "./componentes/Header/Header"
import MiOrg from './componentes/MiOrg/MiOrg';
import Formulario from './Formulario/Formulario';
import Equipo from './componentes/Equipo/Equipo';
import Colaborador from './componentes/Colaborador/Colaborador';
import Footer from './componentes/Footer/Fotter';


function App() {
  const [mostrarFormulario, actualizarMostrar]= useState(false) //cambiar a true para que muestre formulario
  const [colaboradores, actualizarColaboradores] = useState([
  {
    id: uuid(),
    nombre: "Esther Ortegon",
    puesto: "Desarrolladora de software e instructora",
    foto:   "http://www.github.com/str26.png",
    equipo: "Programación",
    fav: true
  },
  {
    id: uuid(),
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    foto:   "https://github.com/str26.png",
    equipo: "FrontEnd",
    fav: false
  },
  {
    id: uuid(),
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    equipo: "UX y Diseño",
    fav: true
    
  },
  {
    id: uuid(),
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    foto: "https://github.com/christianpva.png",
    equipo: "Programación",
    fav: false
    
  },
  {
    id: uuid(),
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    equipo: "Innovación y Gestión",
    fav: false
    
  }])

  const [equipos, actualizarEquipos] = useState ([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "FrontEnd",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Datascience",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Mobil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }     
  ])

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

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador",id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

//Actualizar color de equipo
const actualizarColor = (color, id) => {
  console.log("actualizar: ", color, id)
  const equiposActualizados = equipos.map((equipo) => {
    if (equipo.id === id){
      equipo.colorPrimario =  color
    }

    return equipo
  })

  actualizarEquipos(equiposActualizados)

}


//crear Equipo

const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos,{...nuevoEquipo,id: uuid}])
}


const like =  (id) => {
  console.log("like", id)
  const colaboradoresActualizados = colaboradores.map ((colaborador) => {
    if (colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}

  //Lista de ListadeEquipos se fue para la linea 48
   

return (
    <div>
      <Header />
      {/*operador ternario-/*mostrarFormulario ?  /> : <></>}   {/*mostrarFormulario === true ? <Formulario /> : <div></div>} simplificar codigo*/} 
     {
     mostrarFormulario && <Formulario 
     equipos={equipos.map((equipo) => equipo.titulo)}
     registrarColaborador={registrarColaborador}
     crearEquipo={crearEquipo}
        />
      }  
     
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like = {like}
          />
          
          )
      }

      <Footer />

    </div>
  );
}

export default App;
