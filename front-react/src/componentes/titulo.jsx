import React from "react";
import logo1 from './assets/imagen/logo.svg';

class Titulo extends React.Component {
    render() {
    return ( 
    <div >
        <img id="imagen-logo" src={logo1} alt="logo" />
        <img id="imagen-logo2" src={logo1} alt="logo2" />
        <h1 className="titulo">
            <b> CENTRALES ELECTRICAS DEL NORTE DE SANTANDER </b> <br /> S.A E.S.P
        </h1>
       
        

    </div>
    )    
}
}

export default Titulo