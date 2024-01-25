import { Whatsapp, Linkedin, Envelope } from 'react-bootstrap-icons'

const Contacto = () => {
    return(
        <section id="Contacto" className="space">
            <h1 className="display-3 text-primary mb-5">CONTACTO</h1>
            <div className="d-flex flex-wrap align-items-center mb-2">
                <Whatsapp className="text-light me-1"/>
                <p className="text-light m-0 me-1">Whatsapp</p>
                <a className="text-green me-1" href="https://wa.me/3512290552">+54 9 351 229 0552</a>
            </div>
            <div className="d-flex flex-wrap align-items-center mb-2">
                <Linkedin className="text-light me-1"/>
                <p className="text-light m-0 me-1">Linkedin</p>
                <a className="text-green me-1" href="www.linkedin.com/in/fran-garcia-64374623a">linkedin/fran-garcia</a>
            </div>
            <div className="d-flex flex-wrap align-items-center mb-2">
                <Envelope className="text-light me-1"/>
                <p className="text-light m-0 me-1">Mail</p>
                <a className="text-green me-1" href="mailto:francoalbertogarcia2017@gmail.com">francoalbertogarcia2017@gmail.com</a>
            </div>
            <div>
                <h5 className="text-primary h5 text-uppercase">Este sitio web esta desarrollado con</h5>
                <div>
                <div className="d-flex flex-wrap">
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
            </div>
            </div>
        </section>
    )
}

export default Contacto