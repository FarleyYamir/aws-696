import React from 'react';

import imagen1 from './assets/imagen/home.jpg';

import imagen2 from './assets/imagen/home1.jpg';
 
function Home() {

    return (

        <div>

            <p id="parrafo-home">Somos una empresa que busca generar valor a sus grupos de interés a través de la prestación del servicio de energía eléctrica de manera segura, eficiente, confiable y con respeto hacia el medio ambiente, contribuyendo así al mejoramiento de la calidad de vida de la población.</p>

            <br /><br />

            <img id="imagen-home" src={imagen1} alt="imagen-home" />

            <img id="imagen-home1" src={imagen2} alt="imagen-home1" />

        </div>

    );

}
 
export default Home;
