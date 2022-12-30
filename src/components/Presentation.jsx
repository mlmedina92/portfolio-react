import React from 'react'
import '../styles/presentation.scss';
import { HashLink as Link } from 'react-router-hash-link';


function Presentation() {
  return (
    <div id ="inicio" className="container presentation d-flex flex-column justify-content-center align-items-center text-center">
      <p className="text-uppercase d-inline-block welcome fs-4 mb-4">bienvenidos</p>
      <p className="d-inline-block fs-1 fw-bold mb-4">Soy <span>Lis Medina</span>, Desarrolladora Web Full Stack</p>
      <p className="d-inline-block description fs-4 mt-4">Creación y mantenimiento de sitios webs</p>
      <Link to="/experiencia" className=" mt-4 text-uppercase link-portfolio">Ir al portfolio</Link>
    </div>
    )
}

export default Presentation