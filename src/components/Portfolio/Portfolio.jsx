import {Github} from 'react-bootstrap-icons';

const Portfolio = () =>{
    return(
        <div id="Portfolio" className="space grid-default">
            <h1 className="display-3 text-primary mb-5 mt-5 font-game">PORTFOLIO</h1>
            <div className=" d-flex flex-wrap justify-content-center align-items-start mx-auto">
                <div className="card-bg d-grid ms-2 me-2 mb-5 max-width shadow rounded">
                    <img className="img-width rounded" src="assets/img/portfolio/WEATHER-PAGE.jpg" alt=""/>
                    <h3 className="h5 font-game text-dark text-uppercase">weather page</h3>
                    <p className="text-dark">Pagina del clima integrada con API</p>
                    <div className="d-flex flex-wrap mb-2">
                        <div className="bg-dark m-2 p-1 d-flex align-items-center justify-content-center">
                            <img className="icon-width me-1" src="assets/img/logos/JAVASCRIPT.png" alt="html"/>
                            <p className="text-light m-0 me-1 text-bold text-uppercase">jsx</p>
                        </div>
                        <div className="bg-primary m-2 p-1 d-flex align-items-center justify-content-center">
                            <img className="icon-width me-1" src="assets/img/logos/CSS3.png" alt="html"/>
                            <p className="text-light m-0 me-1 text-bold text-uppercase">css3</p>
                        </div>
                        <div className="bg-dark m-2 p-1 d-flex align-items-center justify-content-center">
                            <img className="icon-width me-1" src="assets/img/logos/REACT.png" alt="html"/>
                            <p className="text-light m-0 me-1 text-bold text-uppercase">react</p>
                        </div>
                        <div className="bg-light m-2 p-1 d-flex align-items-center justify-content-center">
                            <img className="icon-width me-1" src="assets/img/logos/BOOTSTRAP.png" alt="html"/>
                            <p className="text-dark m-0 me-1 text-bold text-uppercase">bootstrap</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a className="d-flex justify-content-center" href="https://github.com/francogarcia02/React-OpenWeatherMap">
                            <Github className="git-icon m-2"/>
                        </a>
                    </div>
                </div>
                <div className="card-bg d-grid ms-2 me-2 mb-5 max-width shadow rounded">
                    <img className="img-width rounded" src="assets/img/portfolio/MP-ECOMMERCE.png" alt=""/>
                    <h3 className="font-game text-dark h5 text-primary text-uppercase">ecommerce con mercado pago</h3>
                    <p className="text-dark">aplicacion web desarrollada para una empresa de venta de electronicos con pasarela de pago</p>
                    <div className="d-flex flex-wrap mb-2">
                        <div className="bg-dark m-2 p-1 d-flex align-items-center justify-content-center">
                            <img className="icon-width me-1" src="assets/img/logos/JAVASCRIPT.png" alt="html"/>
                            <p className="text-light m-0 me-1 text-bold text-uppercase">jsx</p>
                        </div>
                        <div className="bg-primary m-2 p-1 d-flex align-items-center justify-content-center">
                            <img className="icon-width me-1" src="assets/img/logos/CSS3.png" alt="html"/>
                            <p className="text-light m-0 me-1 text-bold text-uppercase">css3</p>
                        </div>
                        <div className="bg-dark m-2 p-1 d-flex align-items-center justify-content-center">
                            <img className="icon-width me-1" src="assets/img/logos/REACT.png" alt="html"/>
                            <p className="text-light m-0 me-1 text-bold text-uppercase">react</p>
                        </div>
                        <div className="bg-light m-2 p-1 d-flex align-items-center justify-content-center">
                            <img className="icon-width me-1" src="assets/img/logos/BOOTSTRAP.png" alt="html"/>
                            <p className="text-dark m-0 me-1 text-bold text-uppercase">bootstrap</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a className="d-flex justify-content-center" href="https://github.com/francogarcia02/React-Ecommerce_MP">
                            <Github className="git-icon m-2"/>
                        </a>
                    </div>
                </div>
                <div className="card-bg d-grid ms-2 me-2 mb-5 max-width shadow rounded ">
                    <img className="img-width rounded" src="assets/img/portfolio/AVENTURAS-VIAJERAS.png" alt=""/>
                    <h3 className="h5 font-game text-dark text-uppercase">web de turismo</h3>
                    <p className="text-dark">aplicacion web desarrollada para una empresa de turismo ubicada en el sur del pais</p>
                    <div className="d-flex flex-wrap mb-2">
                        <div className="bg-dark m-2 p-1 d-flex align-items-center justify-content-center">
                            <img className="icon-width me-1" src="assets/img/logos/JAVASCRIPT.png" alt="html"/>
                            <p className="text-light m-0 me-1 text-bold text-uppercase">jsx</p>
                        </div>
                        <div className="bg-primary m-2 p-1 d-flex align-items-center justify-content-center">
                            <img className="icon-width me-1" src="assets/img/logos/CSS3.png" alt="html"/>
                            <p className="text-light m-0 me-1 text-bold text-uppercase">css3</p>
                        </div>
                        <div className="bg-dark m-2 p-1 d-flex align-items-center justify-content-center">
                            <img className="icon-width me-1" src="assets/img/logos/REACT.png" alt="html"/>
                            <p className="text-light m-0 me-1 text-bold text-uppercase">react</p>
                        </div>
                        <div className="bg-light m-2 p-1 d-flex align-items-center justify-content-center">
                            <img className="icon-width me-1" src="assets/img/logos/BOOTSTRAP.png" alt="html"/>
                            <p className="text-dark m-0 me-1 text-bold text-uppercase">bootstrap</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a className="d-flex justify-content-center" href="https://github.com/francogarcia02/React-AventurasViajeras">
                            <Github className="git-icon m-2"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio