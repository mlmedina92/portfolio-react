import React from 'react';
import '../styles/experiencia.scss';
import '../styles/main.scss';
import dw from '../img/dw.jpg';
import node from '../img/node.jpg';
import js from '../img/js.png';
import react from '../img/react.jpg';
import wp from '../img/wp.jpg';
import front from '../img/front.jpg';
import Certificado from '../components/Certificado';

const Experiencia2 = () => {
    return (
        <>

            <div className="row py-4 gap-3 flex-sm-nowrap">
                {/* Position relative:padre */}
                    <Certificado
                        img={dw}
                        alt="Desarrollo Web"
                        tittle="Desarrollo Web. Coder House"
                        subtitle="Web Tato Medina."
                        server="https://www.tatomedina.com.ar/"
                        git="https://github.com/mlmedina92/tato_medina/tree/scss"
                    />

                    <Certificado
                        img={js}
                        alt="Java Script- Vainilla"
                        tittle="Java Script. Coder House"
                        subtitle="Web Nimax piletas."
                        server="https://www.nimaxpiletas.com.ar/"
                        git="https://github.com/mlmedina92/nimaxDiseno/tree/master"
                    />

                    <Certificado
                        img={react}
                        alt="React JS"
                        tittle="React JS. Coder House"
                        subtitle="Web Mundo Flotante."
                        git="https://github.com/mlmedina92/react-ecommerce"
                    />

            </div>

            <div className="row gap-3 flex-sm-nowrap">
                <Certificado
                    img={node}
                    alt="Node JS"
                    tittle="Programa Codo a Codo: Front-end y Node JS"
                    server="https://www.tatomedina.com.ar/"
                    git="https://github.com/mlmedina92/codoAcodo/tree/master"
                />
                <Certificado
                    img={wp}
                    alt="Wordpress"
                    tittle="Wordpress. Coder House"
                    subtitle="Web Zona Smart - Ecommerce con pluggin de Mercado Pago"

                    server="https://zonasmart.com.ar/"
                />
                <Certificado
                    img={front}
                    alt="React JS"
                    tittle="Aplicacion de React JS"
                    subtitle="Web Inmobiliaria Gamalero"
                    server="https://github.com/mlmedina92/inmobiliaria-gamalero" className="text-reset text-decoration-none" target="_blank" rel="noopener noreferrer"
                />

            </div>


        </>


    )
}

export default Experiencia2