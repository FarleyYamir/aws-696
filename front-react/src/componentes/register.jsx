function Register () {
    return(
        <div>
            <br /> <br />
            <h1>Registrar Usuario</h1>
            <br /> <br />
            <form  className="form" action="/register_user" method="post">
                <label>Nombre:</label> <br /> 
                <input className="recuadro-form" name="nombre"/> <br /> <br />
                <label>Apellido:</label> <br />
                <input className="recuadro-form" name = "apellido" /> <br /> <br />
                <label>Identificación:</label> <br />
                <input className="recuadro-form" name = "identificacion"/> <br /> <br />
                <label>Fecha de tarea:</label> <br />
                <input className="recuadro-form" name = "fecha"/> <br /> <br />
                <label>Tarea realizada:</label> <br />
                <input className="recuadro-tarea" name = "tarea"/> <br /> <br /> <br />
                <button className="btn-reg">Registrar</button>
            </form>
        </div>
    )
}

export default Register