import { useState } from "react"
import "./Formulario.css"
import Campo from "../componentes/CampoTexto/Campo"
import ListadeEquipos from "../componentes/ListadeEquipos/ListadeEquipos"
import Boton from "../componentes/Boton/Boton"


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("manejar envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto: foto, 
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio }>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingrese su Nombre" 
                required
                valor={nombre} 
                actualizarValor = {actualizarNombre}
            /> 
           
            <Campo 
                titulo="Puesto" 
                placeholder="Ingrese su Puesto" 
                required 
                valor={puesto} 
                actualizarValor = {actualizarPuesto}
            />
            
            <Campo
                titulo="Foto" 
                placeholder="Ingrese la URL de su foto" 
                required 
                valor={foto} 
                actualizarValor = {actualizarFoto}
            />

            <ListadeEquipos 
                valor={equipo}
                actualizarEquipo={actualizarEquipo} 
                equipos = {props.equipos}
            />

            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                 titulo="Titulo"
                 placeholder="Ingresar titulo"
                 required
                 valor={titulo}
                 actualizarValor={actualizarTitulo}
            /> 
           
            <Campo 
               titulo="Color"
               placeholder="Ingresar el color en Hex"
               required
               valor={color}
               actualizarValor={actualizarColor}
               type = "color"
            />

        <Boton>
            Registrar Equipo
        </Boton>
        </form>    
        </section>
}

export default Formulario