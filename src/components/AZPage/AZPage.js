import "./AZPage.css";
import React from "react";

const AZPage = () => {
  return (
    <div id="maindivAZ" className="maindivAZ">
      <br></br>
      <div className="hcontainer">
        <h1 className="MTitle">Aguas Zarcas</h1>
        <img
          src="imgs/iglesia.jpg"
          className="img-fluid mx-auto rounded"
          alt="Iglesia Aguas Zarcas"
        ></img>
        <div className="AZInfo"></div>
      </div>
      <div className="mcontainer">
        <div className="factscontainerh">
          <p className="facts1">
            Sabías que: El nombre de Aguas Zarcas, proviene de las aguas
            termales de manantial. El color turquesa es debido a la gran
            cantidad de azufre que contiene el río Aguas Zarcas.
          </p>
          <p className="facts2">
            Sabías que en el año 2019, cayó un meteorito en la zona,
            encontrado por un habitante. Este acontecimiento fue noticia a nivel nacional y
            mundial, lo que inspirá el proyecto de la Comunidad de Desarrollo e Innovación Universitaria.
          </p>
        </div>
        <div className="mmodalcontainer">
          <button
            type="button"
            className="mButton"
            data-bs-toggle="modal"
            data-bs-target="#upperModal"
            id="hButton"
          >
            Presioná aquí para<br></br>más información!
          </button>

          <div
            className="modal fade"
            id="upperModal"
            tabIndex="-1"
            aria-labelledby="upperModaLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="upperModaLabel">
                    Información sobre Aguas Zarcas
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  En Aguas Zarcas, la cultura y la naturaleza se entrelazan en
                  una danza armoniosa que te sorprenderá en cada rincón. Pasea
                  por sus calles pintorescas y admira las coloridas casas que
                  reflejan la esencia de la tradición costarricense. Sumérgete
                  en los mercados locales, donde los aromas de frutas tropicales
                  y café recién tostado llenarán tus sentidos. No puedes dejar
                  de probar la deliciosa gastronomía típica, que combina sabores
                  auténticos con ingredientes frescos de la región.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fcontainer">
        <img
          src="imgs/plaza.jpg"
          className="img-fluid mx-auto rounded"
          alt="Plazoleta Aguas Zarcas"
        ></img>
        <div className="factscontainerf">
          <p className="facts1">
            Los 15 de Septiembre en Aguas Zarcas suelen ser muy alegres y llenos
            de gran ambiente familiar, en el cual las bandas de los centros
            educativos de toda la zona desfilan por sus calles, todo el día.
          </p>
          <p className="facts2">
          El desfile se extiende por las principales calles de Aguas Zarcas;
          el colegio que participa con mayor delegación es El Colegio Técnico
          Profesional de Aguas Zarcas con sus bandas y grupos de bailes folclóricos.
          </p>
        </div>
        <div className="fmodalcontainer">
          <button
            type="button"
            className="mButton"
            data-bs-toggle="modal"
            data-bs-target="#lowerModal"
            id="fButton"
          >
            Presioná aquí para<br></br>más información!
          </button>
          <div
            className="modal fade"
            id="lowerModal"
            tabIndex="-1"
            aria-labelledby="lowerModaLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="lowerModaLabel">
                    Información sobre Aguas Zarcas
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                Aguas Zarcas ofrece oportunidades únicas para los amantes del ecoturismo, con 
                actividades como el avistamiento de aves exóticas, emocionantes recorridos en 
                kayak por los ríos serpenteantes y excursiones a reservas naturales cercanas. 
                Si busca una escapada tranquila o una aventura llena de adrenalina, Aguas Zarcas 
                te ofrece el escenario perfecto para una experiencia memorable y enriquecedora. 
                Ven a descubrir este paraíso escondido y déjate seducir por la magia de esta comunidad. 
                Aguas Zarcas, un destino que te conquistará con su encanto incomparable y su espíritu 
                acogedor. ¡La aventura te aguarda en este rincón de Costa Rica que te enamorará desde 
                el primer instante!
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="imgs/celebracion.jpg"
          className="img-fluid mx-auto rounded"
          alt="15 de Septiembre Aguas Zarcas"
        ></img>
        <div className="factscontainerfj">
          <p className="facts1">
            Aguas Zarcas esta a los pies del Parque Nacional Juan Castro Blanco
            fundado en 1992 con aproximadamente 14.308 hectáreas de extensión,
            proveyendo abundantes fuentes de agua natural, limpia y potable para
            toda su población. Ademas de proveer Eco-Turismo a la zona y
            hermosos paisajes que cautivan a todo el que pasa cerca.
          </p>
        </div>
        <img
          src="imgs/juancastro.jpg"
          className="img-fluid mx-auto rounded"
          alt="15 de Septiembre Aguas Zarcas"
        ></img>
      </div>
    </div>
  );
};
export default AZPage;
