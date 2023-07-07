import React from "react";
import "../styles/habilidades.scss";

const Habilidades = () => {
  return (
    <div className="contenedor-skills p-0 m-0 container-fluid min-vh-100 d-flex px-3 px-md-0">
      <div className="container w-auto d-flex flex-column justify-content-center">
        <div className="row pb-3">
          <h3 className="col-12 fs-2 fw-bold text-center">HABILIDADES</h3>
        </div>
        {/* los span son los cuadraditos blancos */}
        <div className="row pb-3">
          <p className="fs-5 col-12 p-0 m-0">
            <span className="cuadrado d-inline-block me-3"></span><strong>Metodos Ágiles y habilidades blandas</strong>
          </p>
        </div>
        <div className="row pb-3">
          <p className="fs-5 col-12 p-0 m-0">
            <span className="cuadrado d-inline-block me-3"></span>
            <strong>UI / UX:</strong> Figma y Balsamiq
          </p>
        </div>
        <div className="row pb-3">
          <p className="fs-5 col-12 p-0 m-0">
            <span className="cuadrado d-inline-block me-3"></span>
            <strong>Desarrollo Frontend: </strong> HTML, SCSS, Booststrap,
            Material UI
          </p>
        </div>

        <div className="row pb-3">
          <p className="fs-5 col-12 p-0 m-0">
            <span className="cuadrado d-inline-block me-3"></span>
            <strong>Programación: </strong>
            Java Script, React JS, Next JS
          </p>
        </div>
        <div className="row pb-3">
          <p className="fs-5 col-12 p-0 m-0">
            <span className="cuadrado d-inline-block me-3"></span>
            <strong>Optimización de sitios web: </strong>SEO
          </p>
        </div>
        <div className="row pb-3">
          <p className="fs-5 col-12 p-0 m-0">
            <span className="cuadrado d-inline-block me-3"></span>
            <strong>Wordpress: </strong> Creación de webs con plataforma de pago
          </p>
        </div>
        <div className="row">
          <p className="fs-5 col-12 p-0 m-0">
            <span className="cuadrado d-inline-block me-3"></span>
            <strong>Desarrollo Backend: </strong>Node Js
          </p>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
