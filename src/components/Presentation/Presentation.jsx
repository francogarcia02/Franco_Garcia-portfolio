const Presentation = () =>{

    const photoWidth = '160rem';

    return(
        <div className="presentacion d-grid align-items-center" id="Presentacion">
            <div className="d-flex flex-wrap justify-content-around p-5">
                <img src="assets/img/perfil/FotoPersonal.jpeg" width={photoWidth} className="rounded-circle text-center" alt="Foto personal"/>
                <div className="d-grid m-2">
                    <h4 className="text-light font-game">¡hola mundo!</h4>
                    <h3 className="text-blue font-game">soy Franco Garcia</h3>
                    <h4 className="text-light font-game">un desarrollador react.js</h4>
                </div>
            </div>
            <div className="d-grid justify-content-start align-items-center">
                <div className="d-flex flex-wrap align-items-end mt-5">
                    <p className="text-light text-start m-0 me-1 font-game">MAIL: </p>
                    <a className="text-green text-decoration-none m-0" href="mailto:francoalbertogarcia2017@gmail.com">francoalbertogarcia2017@gmail.com</a>
                </div>
                <a className="text-decoration-none mt-2 bg-green text-dark p-2 text-uppercase text-bold text-center rounded" href="https://drive.google.com/drive/u/1/folders/19YuLIEKGSlOxTGAaDmh0Vee4fjxtmUzJ">Mi curriculum vitae</a>
            </div>
        </div>
    )
}

export default Presentation