import './Navigation.css';
import { useState } from 'react';

let sectionNumber = localStorage.getItem('section');
const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    if (sectionNumber == null) {
        sectionNumber = 0
    }
    const openHandler = (direction) => {
        localStorage.setItem('section', direction)
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div className='container_navbar'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top nav">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src="/imgs/Logo_W.png" alt="logo" width="70" height="44"></img>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse nav_bar" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className={`nav-link ${(sectionNumber == 0) ? "active" : ""}`}
                                    onClick={() => openHandler(0)} href="/">Inicio</a>
                                <a className={`nav-link ${(sectionNumber == 1) ? "active" : ""}`}
                                    onClick={() => openHandler(1)} href="/Fragmentos">Fragmentos</a>
                                <a className={`nav-link ${(sectionNumber == 2) ? "active" : ""}`}
                                    onClick={() => openHandler(2)} href="/AZPage">Aguas Zarcas</a>
                                <a className={`nav-link ${(sectionNumber == 3) ? "active" : ""}`}
                                    onClick={() => openHandler(3)} href="/La_Palmera">La Palmera</a>
                                <a className={`nav-link ${(sectionNumber == 4) ? "active" : ""}`}
                                    onClick={() => openHandler(4)} href="/Comunidad">Comunidad</a>
                                <a className={`nav-link ${(sectionNumber == 5) ? "active" : ""}`}
                                    onClick={() => openHandler(5)} href="/Museo">Museo</a>
                                <a className={`nav-link ${(sectionNumber == 6) ? "active" : ""}`}
                                    onClick={() => openHandler(6)} href="/Acerca-de">Acerca de</a>
                                <a className={`nav-link ${(sectionNumber == 7) ? "active" : ""}`}
                                    onClick={() => openHandler(7)} href="/Login">Login</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;