import React from 'react'

const Certificado = (props) => {
    return (
        <a href={props.img} target="_blank" className="col-12 col-sm-4 proyecto p-0">
            <img src={props.img} alt={props.alt} loading="lazy" className="img-fluid" />
            <div className="info">
                <h4>{props.tittle}</h4>
                <a href={props.server} className="text-reset text-decoration-none" target="_blank" rel="noopener noreferrer"><p>Proyecto final:{props.subtitle}VER ONLINE</p></a>
                <a href={props.git} className="text-reset text-decoration-none" target="_blank" rel="noopener noreferrer"><p>VER CÓDIGO</p></a>
            </div>
        </a>
   )
}


export default Certificado