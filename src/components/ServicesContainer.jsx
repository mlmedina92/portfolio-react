import React from 'react'
import Service from './Service'

const ServicesContainer = () => {
    return (
        <div className="row gap-3 flex-sm-nowrap">
            <Service
                icon="code-slash"
                title="Diseño y creación de Sitios Web de contenido o E-commerce"
                skills={["Diseño", "Creación", "Mantenimiento"]}
                note="Tecnologías: HTML, JS, React JS, CSS/SASS" />
            <Service
                icon="wordpress"
                title="Diseño y creación de Sitios Web con Wordpress"
                skills={["Diseño", "Creación", "Mantenimiento"]}
                note="Con plataformas de pagos incluidas" />
            <Service
                icon="arrow-clockwise"
                title="Rediseño y actualización de Sitios Web"
                skills={["Diseño", "Creación", "Mantenimiento"]}
                note="Diseños modernos y full responsive" />
        </div>)
}

export default ServicesContainer