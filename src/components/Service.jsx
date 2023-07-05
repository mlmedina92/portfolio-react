import React from 'react'
import '../styles/services.scss';

const Service = ({icon, title, skills, note}) => {

    const listSkills = skills.map((skill) => <li>{skill}</li>);
    const iconClassName = "d-inline-block fs-2 bi bi-" + icon;
    return (

        <div className="col-12 col-md-4 servicio p-4">
            <span className="icono d-inline-block rounded-circle pt-2"><i className={iconClassName}></i></span>
            <h4 className="mt-3 fw-bold">{title}</h4>

            <ul className="text-start ">
                {listSkills}
            </ul>
            <p className="d-inline-block">{note}</p>
        </div>

    )
}

export default Service

