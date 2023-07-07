import React from 'react'
import '../styles/footer.scss';

const getYear = () => {
    return new Date().getFullYear();
  };

const Footer = () => {
    const year = getYear();

    return (
        <div className="container-fluid text-center">
            <div className="row mb-0 pb-1">
                <p className="text-center fs-6">© Todos los derechos reservados. Lis Medina. {year}</p>
            </div>

            <div className="row my-1">
                <div className="d-flex flex-row justify-content-center px-2">
                    <a href="mailto:lm30540@gmail.com" target="_blank" rel="noopener noreferrer" className="me-3"><i className="bi bi-envelope fs-4"></i></a>
                    <a href="https://github.com/mlmedina92" target="_blank" rel="noopener noreferrer" className="me-3"><i className="bi bi-github fs-4"></i></a>
                    <a href="https://www.linkedin.com/in/lis-medina/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin fs-4"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer