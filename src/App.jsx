import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Presentation from './components/Presentation/Presentation';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Estudios from './components/Estudios/Estudios';
import Contacto from './components/Contacto/Contacto';

function App(){
    return (
        <div className="background">
            <div className="container d-flex flex-column flex-md-row p-0 m-0">
                <NavBar/>
                <main className="justifier p-2 flex-grow-1">
                    <Presentation/>
                    <AboutMe/>
                    <Skills/>
                    <Portfolio/>
                    <Estudios/>
                    <Contacto/>
                </main>
            </div>
        </div>
  );
}

export default App;
