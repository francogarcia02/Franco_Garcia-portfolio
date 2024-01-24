const Skills = () =>{
    return(
        <div id="Habilidades" className="space">
            <h1 className="text-primary display-3 mb-5">SKILLS</h1>
            <div>
                <h1 className="text-light display-5 mb-2">lenguajes de programacion</h1>
                <div className="d-flex flex-wrap">
                    <div className="bg-danger m-2 p-1 d-flex align-items-center justify-content-center">
                        <img className="icon-width me-1" src="assets/img/logos/HTML5.png" alt="html"/>
                        <p className="text-light m-0 me-1 text-bold text-uppercase">html5</p>
                    </div>
                    <div className="bg-primary m-2 p-1 d-flex align-items-center justify-content-center">
                        <img className="icon-width me-1" src="assets/img/logos/CSS3.png" alt="html"/>
                        <p className="text-light m-0 me-1 text-bold text-uppercase">css3</p>
                    </div>
                    <div className="bg-dark me-2 p-1 d-flex align-items-center justify-content-center">
                        <img className="icon-width me-1" src="assets/img/logos/JAVASCRIPT.png" alt="html"/>
                        <p className="text-light m-0 me-1 text-bold text-uppercase">javascript</p>
                    </div>
                    <div className="bg-light m-2 p-1 d-flex align-items-center justify-content-center">
                        <img className="icon-width me-1" src="assets/img/logos/PYTHON.png" alt="html"/>
                        <p className="text-dark m-0 me-1 text-bold text-uppercase">python</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-light display-5 mb-2">frameworks y librerias</h1>
                <div className="d-flex flex-wrap">
                    <div className="bg-light m-2 p-1 d-flex align-items-center justify-content-center">
                        <img className="icon-width me-1" src="assets/img/logos/BOOTSTRAP.png" alt="html"/>
                        <p className="text-dark m-0 me-1 text-bold text-uppercase">bootstrap</p>
                    </div>
                    <div className="bg-dark m-2 p-1 d-flex align-items-center justify-content-center">
                        <img className="icon-width me-1" src="assets/img/logos/REACT.png" alt="html"/>
                        <p className="text-light m-0 me-1 text-bold text-uppercase">react</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-light display-5 mb-2">herramientas</h1>
                <div className="d-flex flex-wrap">
                    <div className="bg-dark m-2 p-1 d-flex align-items-center justify-content-center">
                        <img className="icon-width me-1" src="assets/img/logos/JAVASCRIPT.png" alt="html"/>
                        <p className="text-light m-0 me-1 text-bold text-uppercase">jsx</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills