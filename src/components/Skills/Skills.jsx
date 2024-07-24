import Bootstrap from '../Skills-items/Bootstrap';
import Python from '../Skills-items/Python';
import Css from '../Skills-items/Css';
import Html from '../Skills-items/Html';
import JavaScript from '../Skills-items/JavaScript';
import React from '../Skills-items/React';
import Jsx from '../Skills-items/Jsx';
import Typescript from '../Skills-items/Typescript';
import TailWind from '../Skills-items/TailWind';

const Skills = () =>{
    return(
        <div id="Habilidades" className="space grid-default">
            <h1 className="text-primary display-3 mb-5 mt-5 font-game">SKILLS</h1>
            <div>
                <h1 className="text-light display-5 mb-2">lenguajes de programacion</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    <Html/>
                    <Css/>
                    <JavaScript/>
                    <Python/>
                </div>
            </div>
            <div>
                <h1 className="text-light display-5 mb-2">frameworks y librerias</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    <Bootstrap/>
                    <React/>
                    <TailWind/>
                </div>
            </div>
            <div>
                <h1 className="text-light display-5 mb-2">herramientas</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    <Jsx/>
                    <Typescript/>
                </div>
            </div>
        </div>
    )
}

export default Skills