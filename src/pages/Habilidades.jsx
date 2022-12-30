import React from 'react'
import '../styles/habilidades.scss';

const Habilidades = () => {
    return (
        <div className="contenedor-skills text-center p-0 m-0">
            <div className="container">
                {/* contenedor gral para alinear todo en el eje vertical: */}
                <div className="row align-items-center align-content-center">
                    <div className="container px-5">
                        <div className="row">
                            <h3 className="fs-2 fw-bold">HABILIDADES</h3>
                        </div>
                        {/* los span son los cuadraditos blancos */}

                        <div className="row fw-bold">
                            <p className="fs-5 col-8 p-0 m-0"><span className="cuadrado d-inline-block me-3"></span>HTML, SCSS, BOOTSTRAP</p>
                            <span className="col-4 fs-5">95%</span>
                            <div className="fondo p-0">
                                <div className="barra-95"></div>
                            </div>
                        </div>

                        <div className="row fw-bold">
                            <p className="fs-5 col-8 p-0 m-0"><span className="cuadrado d-inline-block me-3"></span>JAVA SCRIPT</p>
                            <span className="col-4 fs-5">90%</span>
                            <div className="fondo p-0">
                                <div className="barra-90"></div>
                            </div>
                        </div>

                        <div className="row fw-bold">
                            <p className="fs-5 col-8 p-0 m-0"><span className="cuadrado d-inline-block me-3"></span>REACT JS</p>
                            <span className="col-4 fs-5">90%</span>
                            <div className="fondo p-0">
                                <div className="barra-90"></div>
                            </div>
                        </div>

                        <div className="row fw-bold">
                            <p className="fs-5 col-8 p-0 m-0"><span className="cuadrado d-inline-block me-3"></span>NODE JS</p>
                            <span className="col-4 fs-5">70%</span>
                            <div className="fondo p-0">
                                <div className="barra-70"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Habilidades