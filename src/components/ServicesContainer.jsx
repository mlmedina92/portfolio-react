import React from 'react'
import Service from './Service'

const ServicesContainer = () => {
    return (
        <div className="row gap-3 flex-sm-nowrap pt-4">
            <Service
                icon="code-slash"
                title="Diseño y creación de Sitios Web de contenido o E-commerce"
                skills={["Diseño", "Creación", "Mantenimiento"]}
                note="Tecnologías: Figma, Photoshop, HTML, JS, React JS, CSS/SASS, Angular, Bitbucket, GitHub " />
            <Service
                icon="wordpress"
                title="Diseño y creación de Sitios Web con Wordpress"
                skills={["Diseño", "Creación", "Mantenimiento"]}
                note="Nota: plataformas de pagos incluidas como Mercado Pago"/>
            <Service
                icon="arrow-clockwise"
                title="Quality Assurance: Creación y ejecucion de planes de prueba"
                skills={["Conocimientos técnicos", "Comunicación", "Resolución de problemas"]}
                note="Tecnologías: SmartBear Zephyr Scale, Jira" />
        </div>)
}

export default ServicesContainer