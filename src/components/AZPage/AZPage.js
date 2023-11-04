import "./AZPage.css";
import React from "react";

const AZPage = () => {
  return (
    <div className="maindiv">
      <img
        src="img/AZHeader.jpeg"
        className="rounded img-fluid mx-auto"
        alt="Plazoleta Aguas Zarcas"
      ></img>
      <div className="container text-center">
        <div className="row row-cols-4">
          <div className="text-center">
            <img src="img/ctp.png" className="img-fluid" alt="Colegio"></img>
          </div>
          <div className="text-center">
            <img
              src="img/iglesia.png"
              className="img-fluid"
              alt="Iglesia"
            ></img>
          </div>
          <div className="text-center">
            <img src="img/oasis.png" className="img-fluid" alt="Rio"></img>
          </div>
          <div className="text-center">
            <img
              src="img/volcan.png"
              className="img-fluid"
              alt="Volcanes"
            ></img>
          </div>
        </div>
      </div>
      <div className="BuStopAZ">
        <img
          src="img/centro.jpg"
          className="img-fluid mx-auto"
          alt="Centro Aguas Zarcas"
        ></img>
      </div>
      <div className="row row-cols-3">
          <div className="text-center">
            <img src="img/centro-civ.jpg" className="img-fluid rounded" alt="Centro Civiva"></img>
          </div>
          <div className="text-center">
            <img
              src="img/escuelaAZ.jpg"
              className="img-fluid rounded"
              alt="Escuela San Jose"
            ></img>
          </div>
          <div className="text-center">
            <img src="img/Catarata.jpg" className="img-fluid rounded" alt="Catarata La Fortuna"></img>
          </div>
        </div>
      <div className="LeavingAZ">
        <img
          src="img/leaving.jpg"
          className="img-fluid mx-auto"
          alt="Centro Aguas Zarcas"
        ></img>
      </div>
    </div>
  );
};
export default AZPage;
