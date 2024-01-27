const Estudios = () =>{
    return(
        <div id="Estudios" className="space grid-default">
            <h1 className="display-3 text-primary mb-4 mt-5 font-game">ESTUDIOS</h1>
            <div className="grid-default mt-2">
                <h4 className="h4 text-uppercase text-light text-center">tecnicatura en programacion</h4>
                <div className="d-grid justify-content-start">
                    <p className="p-2 text-light">Instituto Tecnico Salesiano Villada (2015-2021)</p>
                </div>
            </div>
            <div className="grid-default mt-2">
                <h4 className="h4 text-uppercase text-light">ingenieria en sistemas</h4>
                <div className="d-grid justify-content-start">
                    <p className="p-2 text-light">Universidad Tecnica Nacional de Cordoba (2022-Actual)</p>
                </div>
            </div>
            <div className="grid-default mt-2">
                <h4 className="h4 text-uppercase text-light">capacitacion propia</h4>
                <div className="d-grid justify-content-start">
                    <p className="p-2 m-1 text-light">Curso de HTML5 (2022)</p>
                    <p className="p-2 m-1 text-light">Curso de CSS3 (2022)</p>
                    <p className="p-2 m-1 text-light">Curso de JavaScript (2022)</p>
                    <p className="p-2 m-1 text-light">Curso de React.js (2023)</p>
                </div>
            </div>
        </div>
    )
}

export default Estudios