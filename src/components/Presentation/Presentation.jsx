const Presentation = () =>{
    return(
        <div className="space" id="Presentacion">
            <div>
                <div className="d-flex">
                    <h1 className="display-1 text-blue p-1">FRANCO </h1>
                    <h1 className="display-1 text-light p-1">GARCIA</h1>
                </div>
                <h5 className="text-secondary">bienvenido a mi portafolio como desarrollador web</h5>
            </div>
            <p className="text-secondary">Si quieres ponerte en contacto conmigo escribeme a <a className="text-green text-decoration-none" href="mailto:francoalbertogarcia2017@gmail.com">francoalbertogarcia2017@gmail.com</a></p>
            <div className="d-flex flex-row">
                <div className="me-2">
                    <a className="text-decoration-none bg-green text-dark p-1 text-center  rounded" href="assets/pdfs/FrancoGarcia-Curriculum.pdf">Descarga mi cv</a>
                </div>
                <div>
                    <a className="text-decoration-none bg-green text-dark p-1 text-center  rounded" href="assets/pdfs/FrancoGarcia-Curriculum(Ingles).pdf">Descarga mi cv (ingles)</a>
                </div>
            </div>
        </div>
    )
}

export default Presentation