import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"  //nombre del icon a utilizar 

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    //ternario
    // condicion ? verdadero : falso
    // si la condiciones es verdaddero, mostrara lo siguiente al ?, sino se coloca lo que esta dsps de dospuntos

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() =>eliminarColaborador(id)} />
        <div className="encabezado" style = {{backgroundColor: colorPrimario}}>
       
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
           {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)} /> }

            
        </div>
    </div>
   
}

export default Colaborador