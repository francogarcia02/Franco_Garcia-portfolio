import './NavBar.css'
import React from 'react';
import {ToggleOff} from 'react-bootstrap-icons'

const NavBar = () => {

    const photoWidth = '140rem';

    return(
        <nav className="p-3 navbar navbar-expand-md navbar-light d-flex flex-md-column">
            <a href="#1"><img src="assets/img/perfil/FotoPersonal.jpeg" width={photoWidth} className="rounded-circle text-center" alt="Foto personal"/></a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSuportedContent"
            aria-controls="navbarSuportedContent"
            aria-expanded="false"
            aria-label="Toggle Navigation"
                >
                <ToggleOff/>
            </button>
            <div className="collapse navbar-collapse w-100 align-items-start mt-3" id="navbarSuportedContent">
                <ul className="navbar-nav d-flex w-100 flex-md-column text-center text-md-end">
                    <li>
                        <a href="#2" className="text-bold text-uppercase text-decoration-none" aria-current="page">Sobre mi</a>
                    </li>
                    <li>
                        <a href="#3" className="text-bold text-uppercase text-decoration-none">Skills</a>
                    </li>
                    <li>
                        <a href="#4" className="text-bold text-uppercase text-decoration-none">Portfolio</a>
                    </li>
                    <li>
                        <a href="#5" className="text-bold text-uppercase text-decoration-none">Estudios</a>
                    </li>
                    <li>
                        <a href="#6" className="text-bold text-uppercase text-decoration-none">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar