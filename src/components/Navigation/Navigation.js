import "./Navigation.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navigation">
        <div className="navigation__logo">
          <img className="logo" src="/img/Page_logo.png" alt="logo" />
        </div>
        <div>
          <nav className="navigation_nav">
            <div className="menu-box">
              <ul className="menu">
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/Meteoritos">Meteoritos</Link>
                </li>
                <li>
                  <Link to="/Comunidad">Comunidad</Link>
                </li>
                <li>
                  <Link to="/Museo">Museo</Link>
                </li>
                <li>
                  <Link to="/AZPage">Aguas Zarcas</Link>
                </li>
                <li>
                  <Link to="/Acerca-de">Acerca de</Link>
                </li>
              </ul>
            </div>
            <div className="hamburger-menu" onClick={openHandler}>
              &#9776;
            </div>
          </nav>
        </div>
      </div>
      <nav>
        <div className={`burbar ${!isOpen ? "collapsed" : ""}`}>
          <ul className="menu-burbar">
            <li onClick={openHandler}>
              <Link to="/">Inicio</Link>
            </li>
            <li onClick={openHandler}>
              <Link to="">Meteoritos</Link>
            </li>
            <li onClick={openHandler}>
              <Link to="/Comunidad">Comunidad</Link>
            </li>
            <li onClick={openHandler}>
              <Link to="">Museo</Link>
            </li>
            <li onClick={openHandler}>
              <Link to="">Acerca de</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bodyf"></div>
    </div>
  );
};

export default Navigation;
