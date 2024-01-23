import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe'

function App(){
    return (
        <div className="background">
            <div className="container d-flex flex-column flex-md-row p-0 m-0">
                <NavBar/>
                <main className="justifier mt-5 ps-md-5 flex-grow-1">
                    <AboutMe/>
                    <AboutMe/>
                    <AboutMe/>
                    <AboutMe/>
                    <AboutMe/>
                    <AboutMe/>
                    <AboutMe/>
                    <AboutMe/>
                    <AboutMe/>
                    <AboutMe/>
                </main>

            </div>
        </div>
  );
}

export default App;
