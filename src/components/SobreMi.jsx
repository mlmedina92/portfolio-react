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
                <p className="mt-2 mt-ms-0">Realicé varios cursos: <strong>JS</strong>, en el cual quedé en el top 10 de alumnos, igual que en el de <strong>Wordpress</strong>.Estudié <strong>React JS y Node JS.</strong></p>
                <p className="mt-2 mt-ms-0">Desde el inicio mi meta fue <strong>desarrollar proyectos finales de cada curso con clientes reales</strong>, lo cual fue un gran desafío y aumentó además mis <strong>habilidades blandas.</strong></p>
                <p className="mt-2 mt-ms-0">Tengo <strong>experiencia</strong> en la <strong>creación</strong> de Sitios Web y mantenimiento de ellos para Tato Medina, Nimax piscinas, Inmobiliaria Gamalero, Mundo Flotante.</p>
                <p className="mt-2 mt-ms-0">Disfruto de <strong>trabajar en equipo. </strong>Soy responsable, flexible ante los cambios imprevistos y tengo mucha voluntad ya que disfruto de aprender.</p>
                <p className="mt-2 mt-ms-0"><strong>Busco sumarme a un equipo</strong> en el cual seguir aprendiendo y poner en práctica mis conocimientos.</p>
                <p className=" mt-2 mt-ms-0 fw-bold">Si estás interesado,<strong></strong> contactame!! GRACIAS!!</p>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-3 my-4 mt-md-0">
                            <a href="https://www.linkedin.com/in/lis-medina/" target="_blank" rel="noopener noreferrer">CV On-line</a>
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