import React from 'react'
import '../styles/footer.scss';


const Footer = () => {
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <p className="text-center fs-4 my-4">Copyright. Todos los derechos reservados - Lis Medina - Tandil - 2022</p>
            </div>

            <div className="row pb-4">
                <div className="d-flex flex-row justify-content-center px-2">
                    <a href="mailto:lm30540@gmail.com" target="_blank" rel="noopener noreferrer" className="me-3"><i className="bi bi-envelope fs-3"></i></a>
                    <a href="https://github.com/mlmedina92" target="_blank" rel="noopener noreferrer" className="me-3"><i className="bi bi-github fs-3"></i></a>
                    <a href="https://www.linkedin.com/in/lis-medina/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin fs-3"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer