import {Github} from 'react-bootstrap-icons';
import Responsive from './Responsive';
import React from '../Skills-items/React';
import Typescript from '../Skills-items/Typescript';
import TailWind from '../Skills-items/TailWind';
import Jsx from '../Skills-items/Jsx';
import Css from '../Skills-items/Css';
import Bootstrap from '../Skills-items/Bootstrap';
import { Suspense } from 'react';
import LazyImg from './LazyImg';

const Portfolio = () =>{
    return(
        <div id="Portfolio" className="space grid-default ">
            <h1 className="display-3 text-primary mb-5 mt-5 font-game">PORTFOLIO</h1>
            <div className=" d-flex flex-wrap justify-content-center align-items-start mx-auto">
                <div className="card-bg d-grid ms-2 me-2 mb-5 max-width shadow rounded position-relative">
                    <Responsive/>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImg classes={'img-width rounded'} url={"assets/img/portfolio/BIMAX-REARMADO.png"}/>
                    </Suspense>
                    <h3 className="h5 font-game text-dark text-uppercase">bimax page</h3>
                    <p className="text-dark">Sitio web desarrollado en equipo simulando portal de BIMAX, con sistema de usuarios integrando base de datos</p>
                    <div className="d-flex flex-wrap mb-2">
                        <React/>
                        <Typescript/>
                        <Css/>
                        <TailWind/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a className="d-flex justify-content-center" href="https://github.com/Qarola/inmobiliaria-bonpland-id-for-ideas">
                            <Github className="git-icon m-2"/>
                        </a>
                    </div>
                </div>
                <div className="card-bg d-grid ms-2 me-2 mb-5 max-width shadow rounded">
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImg classes={'img-width rounded'} url={"assets/img/portfolio/MP-ECOMMERCE.png"}/>
                    </Suspense>
                    <h3 className="font-game text-dark h5 text-primary text-uppercase">ecommerce con mercado pago</h3>
                    <p className="text-dark">aplicacion web desarrollada para una empresa de venta de electronicos con pasarela de pago</p>
                    <div className="d-flex flex-wrap mb-2">
                        <React/>
                        <Jsx/>
                        <Css/>
                        <Bootstrap/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a className="d-flex justify-content-center" href="https://github.com/francogarcia02/React-Ecommerce_MP">
                            <Github className="git-icon m-2"/>
                        </a>
                    </div>
                </div>
                <div className="card-bg d-grid ms-2 me-2 mb-5 max-width shadow rounded ">
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImg classes={'img-width rounded'} url={"assets/img/portfolio/AVENTURAS-VIAJERAS.png"}/>
                    </Suspense>
                    <h3 className="h5 font-game text-dark text-uppercase">web de turismo</h3>
                    <p className="text-dark">aplicacion web desarrollada para una empresa de turismo ubicada en el sur del pais</p>
                    <div className="d-flex flex-wrap mb-2">
                        <React/>
                        <Jsx/>
                        <Css/>
                        <Bootstrap/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a className="d-flex justify-content-center" href="https://github.com/francogarcia02/React-AventurasViajeras">
                            <Github className="git-icon m-2"/>
                        </a>
                    </div>
                </div>
                <div className="card-bg d-grid ms-2 me-2 mb-5 max-width shadow rounded position-relative">
                    <Responsive/>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImg classes={'img-width rounded'} url={"assets/img/portfolio/TASKING-PAGE.png"}/>
                    </Suspense>
                    <h3 className="h5 font-game text-dark text-uppercase">tasking page</h3>
                    <p className="text-dark">Pagina de tareas con Material UI</p>
                    <div className="d-flex flex-wrap mb-2">
                        <React/>
                        <Bootstrap/>
                        <Jsx/>
                        <div className="bg-light m-2 p-1 d-flex align-items-center justify-content-center">
                            <img className="icon-width me-1" src="assets/img/logos/MATERIAL.png" alt="html"/>
                            <p className="text-dark m-0 me-1 text-bold text-uppercase">material ui</p>
                        </div>
                        <Css/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a className="d-flex justify-content-center" href="https://github.com/francogarcia02/React-OpenWeatherMap">
                            <Github className="git-icon m-2"/>
                        </a>
                    </div>
                </div>
                <div className="card-bg d-grid ms-2 me-2 mb-5 max-width shadow rounded position-relative">
                    <Responsive/>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImg classes={'img-width rounded'} url={"assets/img/portfolio/WEATHER-PAGE.png"}/>
                    </Suspense>
                    <h3 className="h5 font-game text-dark text-uppercase">weather page</h3>
                    <p className="text-dark">Pagina del clima integrada con API</p>
                    <div className="d-flex flex-wrap mb-2">
                        <React/>
                        <Jsx/>
                        <Css/>
                        <Bootstrap/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a className="d-flex justify-content-center" href="https://github.com/francogarcia02/React-OpenWeatherMap">
                            <Github className="git-icon m-2"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio