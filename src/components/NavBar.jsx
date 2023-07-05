
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'; //para esto se instaló una libreria 
import logo from '../img/logo.png';
import '../styles/main.scss';

const NavBar = () => {

  // funcion para aplicar las clases nativas de react-router-dom para links activos
  const navLinkClassName = "nav-link";
  const navLinkClassNameActive = "nav-link active";

  return (
    <nav className="navbar navbar-expand-lg opacity-50 bg-black">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Lis Medina" loading="lazy" />
        </NavLink>
        {/* menu movile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarId" aria-expanded="false" aria-label="Toggle navigation"> <i className="bi bi-list"></i></button>
        {/* Links menu */}
        <div className="collapse navbar-collapse justify-content-end text-uppercase" id="navbarId" >
          <ul className="navbar-nav ms-auto text-start">
            
            <li className="nav-item ">
              <Link className={navLinkClassName} activeclassname={navLinkClassNameActive} to="/#sobre-mi">Sobre mi</Link>
            </li>

            <li className="nav-item ">
              <Link className={navLinkClassName} activeclassname={navLinkClassNameActive} to="/#services">Servicios</Link>
            </li>
            <li className="nav-item ">
              <Link className={navLinkClassName} activeclassname={navLinkClassNameActive} to="/experiencia" >Experiencia</Link>
            </li>
            <li className="nav-item ">
              <Link className={navLinkClassName} activeclassname={navLinkClassNameActive} to="/habilidades">Habilidades</Link>
            </li>
            <li className="nav-item ">
              <Link className={navLinkClassName} activeclassname={navLinkClassNameActive} to="/contacto" >Contacto</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;