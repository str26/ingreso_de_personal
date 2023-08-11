import "./ListadeEquipos.css"

const ListadeEquipos = (props) => {

    //Metodo mao -> arreglo,mao(equipo,index) => {
    //    return <option></option>
    // }


    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista__opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disable defaultValue="" hidden>Seleccionar Equipo </option>
            { props.equipos.map((equipo,index) => <option key={index} value={equipo}>{equipo}</option> )} {/*debemos tener un key unico porque react lo necesita, esta llave de equipo es igual al equipo inicial de esta linea */ }  
         </select>
    </div>

}
export default ListadeEquipos