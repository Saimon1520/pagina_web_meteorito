import "./adminpln.css";
const SideNavBar = () => {
    const delLocalStorage = () => {
        localStorage.clear();
    }
    return (
        <div className="maindiv">
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/admin">
                        <img src="/imgs/Logo_W.png" alt="logo" width="70" height="44"></img>
                    </a>
                    <button className="navbar-toggler" id="asd" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú de Navegación</h5>
                            <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/admin">Visualización de Métricas</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Usuarios
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item" href="/admin/useradd">Agregar Usuarios</a></li>
                                        <li>
                                            <hr className="dropdown-divider"></hr>
                                        </li>
                                        <li><a className="dropdown-item" href="/admin/usertable">Gestor de Usuarios</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" onClick={delLocalStorage} aria-current="page" href="/">Cerrar Sesión</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default SideNavBar;
