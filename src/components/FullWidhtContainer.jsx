import React from 'react'
import '../styles/fullWidhtContainer.scss';


const FullWidhtContainer = (props) => {
    return (
        <div id={props.id} className="container-fluid">
            <div className="container">
                {/* contenedor gral para alinear todo en el eje vertical: */}
                <div className="row align-items-center align-content-center">
                    <h3 className="text-uppercase fs-2 titulo-seccion">{props.title}</h3>
                    {/* con props.children traigo a todos sus hijos  */}
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default FullWidhtContainer