import React from 'react';
import '../styles/experiencia.scss';
import '../styles/main.scss';
import dw from '../img/dw.jpg';
import node from '../img/node.png';
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
                        tittle="Coder House"
                        subtitle="Web Tato y José Medina S.R.L."
                        server="https://www.tatomedina.com.ar/"
                        git="https://github.com/mlmedina92/tato_medina/tree/scss"
                    />

                    <Certificado
                        img={js}
                        alt="Java Script"
                        tittle="Coder House"
                        subtitle="Web Nimax piletas"
                        server="https://www.nimaxpiletas.com.ar/"
                        git="https://github.com/mlmedina92/nimaxDiseno/tree/master"
                    />

                    <Certificado
                        img={react}
                        alt="React JS"
                        tittle="Coder House"
                        server=""
                        git=""
                    />

            </div>

            <div className="row gap-3 flex-sm-nowrap mb-5">
                <Certificado
                    img={node}
                    alt="Node JS"
                    tittle="Programa Codo a Codo: Front-end y Node JS"
                    server=""
                    git=""
                />
                <Certificado
                    img={wp}
                    alt="Wordpress"
                    tittle="Coder House"
                    subtitle="Web Zona Smart"
                    server="https://zonasmart.com.ar/"
                    git=""

                />
                <Certificado
                    img={front}
                    alt="React JS"
                    tittle="Aplicacion de React JS"
                    subtitle="Web Inmobiliaria Gamalero"
                    server="https://www.gamaleropropiedades.com/" className="text-reset text-decoration-none" target="_blank" rel="noopener noreferrer"
                    git="https://github.com/mlmedina92/inmobiliaria-gamalero"
                />
            </div>
        </>


    )
}

export default Experiencia2