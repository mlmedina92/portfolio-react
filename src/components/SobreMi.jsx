import React from 'react';
import lis from '../img/lis.jpg';
import cvPdf from '../data/LisMedina.Dev.pdf'
import '../styles/sobremi.scss';


const SobreMi = () => {
    return (
        <div className="row align-items-center justify-content-center sobre-mi">
            <div className="col-12 col-md-4 pb-4">
                <img src={lis} className="img-fluid rounded" alt="Lis Medina" loading="lazy" />
            </div>
            <div className="col-12 col-md-8">
                <h2 className="fs-1 fw-bold">Hola soy, <span> Lis Medina</span></h2>
                <h3 className="text-uppercase fs-5">DESARROLLADORA WEB FULL STACK</h3>
                <p className="mt-2 mt-ms-0">Recien recibida pero con gran compromiso y pasión por la programación.</p>
                <p className="mt-2 mt-ms-0">Busco dedicarme de lleno al sector de IT. Me motiva seguir aprendiendo y ver los resultados que he ido teniendo fruto del compromiso y persistencia.</p>
                <p className="mt-2 mt-ms-0">A lo largo de los cursos que fui haciendo, cada proyecto final que realicé fue para clientes reales lo que aumentó muchos mis conocimientos técnicos y mis habilidades blandas. Esto supuso un gran desafío sobre todo al principio, pero la recompensa es grande : la relacón con ellos es muy buena y siguen llamandome para actualizaciones en sus sitios.</p>
                <p className="mt-2 mt-ms-0">Llevé a cabo proyectos con HTML, JS, CSS, SASS, REACT, WORDPRESS, NODE JS. Realicé varias formaciones que pueden verse en mi perfil. Desde hace unos meses también formo parte del grupo de trabajo Conkiusoft ofreciendo mis servicios en el rubro.</p>
                <p className="mt-2 mt-ms-0">Estoy dispuesta a estar al día con las nuevas tecnologías para avanzar en mi desarrollo como programadora. Soy muy comprometida en mi trabajo y doy lo mejor de mi para alcanzar mis metas.</p>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-3 my-4 mt-md-0">
                            <a href="https://www.linkedin.com/in/lis-medina/" target="_blank" rel="noopener noreferrer">LINKELIND</a>
                        </div>
                        <div className="col-6 col-md-3 my-4 mt-md-0">
                            <a href={cvPdf} target="_blank" rel="noopener noreferrer">CV PDF</a>
                        </div>
                        <div className="col-6 col-md-6 my-4 mt-md-0">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi