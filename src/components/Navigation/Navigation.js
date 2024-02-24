import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {

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
                                <NavLink className="nav-link" to="/">Inicio</NavLink>
                                <NavLink className="nav-link" to="/Fragmentos">Fragmentos</NavLink>
                                <NavLink className="nav-link" to="/AZPage">Aguas Zarcas</NavLink>
                                <NavLink className="nav-link" to="/La_Palmera">La Palmera</NavLink>
                                <NavLink className="nav-link" to="/Comunidad">Comunidad</NavLink>
                                <a className="nav-link" href='aquiVaElLinkDelMuseo.com' target="_blank">Museo</a>
                                <NavLink className="nav-link" to="/Acerca-de">Acerca de</NavLink>
                                <NavLink className="nav-link" to="/Login">Login</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;