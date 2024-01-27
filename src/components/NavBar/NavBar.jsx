import React from 'react';
import {ToggleOff} from 'react-bootstrap-icons'

const NavBar = () => {



    return(
        <nav className="navbar navbar-expand-md navbar-light d-flex flex-md-column">
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSuportedContent"
            aria-controls="navbarSuportedContent"
            aria-expanded="false"
            aria-label="Toggle Navigation"
                >
                <ToggleOff className="text-light border-light"/>
            </button>
            <div className="collapse navbar-collapse w-100 align-items-start" id="navbarSuportedContent">
                <ul className="font-game_bold navbar-nav d-flex w-100 justify-content-center align-items-center flex-md-row text-center text-md-center">
                    <li className="p-2">
                        <a href="#Sobre-mi" className=" text-uppercase text-decoration-none" aria-current="page">Sobre mi</a>
                    </li>
                    <li className="p-2">
                        <a href="#Habilidades" className=" text-uppercase text-decoration-none">Skills</a>
                    </li>
                    <li className="p-2">
                        <a href="#Portfolio" className=" text-uppercase text-decoration-none">Portfolio</a>
                    </li>
                    <li className="p-2">
                        <a href="#Estudios" className=" text-uppercase text-decoration-none">Estudios</a>
                    </li>
                    <li className="p-2">
                        <a href="#Contacto" className=" text-uppercase text-decoration-none">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar