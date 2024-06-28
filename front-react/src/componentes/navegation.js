import React from "react";
class Navegation extends React.Component {
    render() {

        function home_view() {
            window.location = "/"
        }

        /* funcion flecha
        let home_view = () => {
            window.location = "/"
        } 
        */

        function register_view() {
            window.location = "/register_page"
        }

        function consult_view() {
            window.location = "/consult_page"
        }

        function contact_view() {
            window.location = "/contact_page"
        }


    return ( 
            <div id="block-nav">
                <li className="items-nav">
                    <button className="btn-nav" onClick={home_view}><a className="let-reg">Home</a></button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={register_view}><a className="let-reg">Registro</a></button>
                </li>
                <li className="items-nav"> 
                    <button className="btn-nav" onClick={consult_view}><a className="let-reg">Consulta</a></button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={contact_view}><a className="let-reg">Contacto</a></button>
                </li>
            </div>
        )    
    }
}

export default Navegation