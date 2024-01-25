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
            <div className="grid">
                <a className="text-decoration-none bg-green text-dark p-2 text-uppercase text-bold text-center rounded" href="https://drive.google.com/drive/u/1/folders/19YuLIEKGSlOxTGAaDmh0Vee4fjxtmUzJ">Mi curriculum vitae</a>
            </div>
        </div>
    )
}

export default Presentation