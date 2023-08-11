import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../componentes/CampoTexto/CampoTexto"
import ListadeEquipos from "../componentes/ListadeEquipos/ListadeEquipos"
import Boton from "../componentes/Boton/Boton"


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("manejar envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto: foto,
            equipo
        }
        console.log(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio }>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingrese su Nombre" 
                required
                valor={nombre} 
                actualizarValor = {actualizarNombre}
            /> 
           
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingrese su Puesto" 
                required 
                valor={puesto} 
                actualizarValor = {actualizarPuesto}
            />
            
            <CampoTexto 
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
        </section>
}

export default Formulario