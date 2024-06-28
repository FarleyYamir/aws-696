function Consult () {
    return(
        <div>
            <h1>Consultar Usuario</h1>
            <h3>Ingrese el numero de identificación</h3>
            <form className="form">
                <label>Identificación:</label> <br />
                <input className="recuadro-form"/> <br /> <br />
                <label>Fecha de tarea:</label> <br />
                <input className="recuadro-form"/> <br /> <br />
                <button className="btn-reg">consultar</button> <br /> <br /> <br />
                <label>Su tarea realizada fue:</label> <br />
                <input className="recuadro-tarea"/> 
            </form>
        </div>
    )
}

export default Consult