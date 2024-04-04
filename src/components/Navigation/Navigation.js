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
                                <NavLink className="nav-link" to="/Meteorito">Meteorito</NavLink>
                                <a className="nav-link" href='aquiVaElLinkDelMuseo.com' target="_blank">Museo</a>
                                <NavLink className="nav-link" to="/AZPage">Aguas Zarcas</NavLink>
                                <NavLink className="nav-link" to="/Eventos">Eventos</NavLink>
                                <NavLink className="nav-link" to="/Comunidad">Comunidad</NavLink>
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;