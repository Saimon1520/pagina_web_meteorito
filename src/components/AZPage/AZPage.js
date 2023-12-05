import "./AZPage.css";
import React from "react";

const AZPage = () => {
  return (
    <div className="maindiv">
      <div className="hcontainer">
        <h1 className="AZTitle">Aguas Zarcas</h1>
        <img
          src="img/iglesia.jpg"
          className="img-fluid mx-auto rounded"
          alt="Iglesia Aguas Zarcas"
        ></img>
        <div className="AZInfo"></div>
      </div>
      <div className="mcontainer">
        <div className="factscontainerh">
          <p className="facts1">
            Sabías que: El nombre de Aguas Zarcas, proviene de las aguas
            termales de manantial. El color turquesa es debido a la cantidad de
            azufre que contiene el río Aguas Zarcas.
          </p>
          <p className="facts2">
            Sabías que: En el año 2019, cayó un meteorito en la zona, siendo
            encontrado por un vecino de la zona, siendo gran noticia por unas
            semanas, inspirando un proyecto de CODEIN.
          </p>
          <p className="facts3">
            Sabías que: Aguas Zarcas se encuentra rodeado por los volcanes
            Platanar, Porvenir, y Viejo, todos en el Parque nacional Juan Castro
            Blanco. La zona se ubica un campo volcánico.
          </p>
        </div>
        <div className="mmodalcontainer">
          <button
            type="button"
            class="mButton"
            data-bs-toggle="modal"
            data-bs-target="#upperModal"
            id="hButton"
          >
            Presioná aquí para<br></br>más información!
          </button>

          <div
            class="modal fade"
            id="upperModal"
            tabindex="-1"
            aria-labelledby="upperModaLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="upperModaLabel">
                    Información sobre Aguas Zarcas
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
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
          src="img/plaza.jpg"
          className="img-fluid mx-auto rounded"
          alt="Plazoleta Aguas Zarcas"
        ></img>
        <div className="factscontainerf">
          <p className="facts1">
            Los 15 de Septiembre en Aguas Zarcas suelen ser muy alegre y llenos
            de un gran ambiente familiar, en el cual las bandas de los centros
            educativos de la zona, desfilando por las calles de Aguas Zarcas
            alegremente todo el día celebrando!
          </p>
          <p className="facts2">
            Suelen haber desfiles conmemorando el dia de la independencia el
            colegio mas grande de la zona es el CTP de Aguas Zarcas, el cual
            trae bandas y grupos de baile folclórico, el desfile inicia desde el
            colegio hasta el centro de Aguas Zarcas.
          </p>
        </div>
        <div className="fmodalcontainer">
          <button
            type="button"
            class="mButton"
            data-bs-toggle="modal"
            data-bs-target="#lowerModal"
            id="fButton"
          >
            Presioná aquí para<br></br>más información!
          </button>
          <div
            class="modal fade"
            id="lowerModal"
            tabindex="-1"
            aria-labelledby="lowerModaLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="lowerModaLabel">
                    Información sobre Aguas Zarcas
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  Aguas Zarcas ofrece oportunidades únicas para los amantes del
                  ecoturismo, con emocionantes actividades como el avistamiento
                  de aves exóticas, emocionantes recorridos en kayak por los
                  ríos serpenteantes y emocionantes excursiones a reservas
                  naturales cercanas. Ya sea que busques una escapada tranquila
                  o una aventura llena de adrenalina, Agua Zarcas te ofrece el
                  escenario perfecto para una experiencia memorable y
                  enriquecedora. Ven a descubrir este paraíso escondido y déjate
                  seducir por la magia de Agua Zarcas, un destino que te
                  conquistará con su encanto incomparable y su espíritu
                  acogedor. ¡La aventura te aguarda en este rincón de Costa Rica
                  que te enamorará desde el primer instante!
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="img/celebracion.jpg"
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
          src="img/juancastro.jpg"
          className="img-fluid mx-auto rounded"
          alt="15 de Septiembre Aguas Zarcas"
        ></img>
      </div>
    </div>
  );
};
export default AZPage;
