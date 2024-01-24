import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Presentation from './components/Presentation/Presentation';
import Skills from './components/Skills/Skills';

function App(){
    return (
        <div className="background">
            <div className="container d-flex flex-column flex-md-row p-0 m-0">
                <NavBar/>
                <main className="justifier p-4 flex-grow-1">
                    <Presentation/>
                    <AboutMe/>
                    <Skills/>
                </main>
            </div>
        </div>
  );
}

export default App;