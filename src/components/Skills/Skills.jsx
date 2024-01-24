const Skills = () =>{
    return(
        <div id="Habilidades" className="">
            <h1 className="text-primary display-3 mb-4">SKILLS</h1>
            <div>
                <h1 className="text-light display-5 mb-2">lenguajes de programacion</h1>
                <div className="row">
                    <div className="col bg-danger me-2 p-1 d-flex align-items-center">
                        <img className="icon-width me-1" src="assets/img/logos/HTML5.png" alt="html"/>
                        <p className="text-light m-0 me-1 text-bold">html5</p>
                    </div>
                    <div className="col bg-primary me-2 p-1 d-flex align-items-center">
                        <img className="icon-width me-1" src="assets/img/logos/CSS3.png" alt="html"/>
                        <p className="text-light m-0 me-1 text-bold">css3</p>
                    </div>
                    <div className="col bg-dark me-2 p-1 d-flex align-items-center">
                        <img className="icon-width me-1" src="assets/img/logos/JAVASCRIPT.png" alt="html"/>
                        <p className="text-light m-0 me-1 text-bold">javascript</p>
                    </div>
                    <div className="col bg-light me-2 p-1 d-flex align-items-center">
                        <img className="icon-width me-1" src="assets/img/logos/PYTHON.png" alt="html"/>
                        <p className="text-dark m-0 me-1 text-bold">python</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-light display-5 mb-2">frameworks y librerias</h1>
                <div className="d-flex">
                    <div className="me-2 p-1 d-flex align-items-center">
                        <img className="icon-width me-1" src="assets/img/logos/BOOTSTRAP.png" alt="html"/>
                        <p className="text-light m-0 me-1 text-bold">bootstrap</p>
                    </div>
                    <div className="me-2 p-1 d-flex align-items-center">
                        <img className="icon-width me-1" src="assets/img/logos/REACT.png" alt="html"/>
                        <p className="text-light m-0 me-1 text-bold">react</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-light display-5 mb-2">herramientas</h1>
                <div className="d-flex">
                    <div className="me-2 p-1 d-flex align-items-center">
                        <img className="icon-width me-1" src="assets/img/logos/JAVASCRIPT.png" alt="html"/>
                        <p className="text-light m-0 me-1 text-bold">jsx</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills