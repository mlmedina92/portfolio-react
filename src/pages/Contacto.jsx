import React, { useRef } from "react";
import emailjs from "@emailjs/browser";//https://www.emailjs.com/docs/examples/reactjs/
import '../styles/contacto.scss';



const Contacto = () => {
    const form = useRef();

    const formSubmit = (event) => {
        event.preventDefault();
        emailjs
            .sendForm(
                "port_lis",
                "lis-medina",
                form.current,
                "_foHohnEONQliAi_t"
            )
            .then(
                (result) => {
                   console.log("Mensaje enviado con éxito", "", "success");
                        },
                (error) => {
                    console.log("Hubo un error: " + error.text, "", "error");
                }
            );
    };

    return (
        <>
            <section id="contacto">
                <div className="container">
                    <div className="m-auto row d-flex align-items-center align-content-start mt-5 mb-md-0 align-content-md-center min-vh-100">
                        <div className="col-12 mb-3 mb-md-0 form-width">
                            <h1 className="col-12 text-center pt-2 text-uppercase fs-2 titulo-seccion mb-5">Contacto</h1>
                            <form ref={form} onSubmit={formSubmit}>

                                <div className="mb-3">
                                    <input
                                        className="form-control required"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Nombre"
                                        required
                                    />
                                </div>
                                <div className="mb-3">

                                    <input
                                        className="form-control required"
                                        type="tel"
                                        id="tel"
                                        name="tel"
                                        placeholder="Teléfono"
                                        required
                                    />
                                </div>
                                <div className="mb-3">

                                    <input
                                        className="form-control"
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-3">

                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="4"
                                        cols="50"
                                        placeholder="Escribi tu mensaje"

                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <input type="submit" className="btn-enviar" />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Contacto;