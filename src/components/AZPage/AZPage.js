import "./AZPage.css";
import React from "react";
import Modal from "react-modal";

const modalStyle = {
  overlay: {},
  content: {
    textAlign: "justify",
    width: "50%",
    height: "69%",
    margin: "auto",
  },
};
Modal.setAppElement("#root");
const AZPage = () => {
  let AZInfo;
  let AZInfo2;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    AZInfo2.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="maindiv">
      <img
        src="img/AZHeader.jpeg"
        className="img-fluid mx-auto"
        alt="Plazoleta Aguas Zarcas"
      ></img>
      <div className="FImgs">
        <img src="img/ctp.png" className="img-fluid" alt="Colegio"></img>
        <img src="img/iglesia.png" className="img-fluid" alt="Iglesia"></img>
        <img src="img/oasis.png" className="img-fluid" alt="Rio"></img>
        <img src="img/volcan.png" className="img-fluid" alt="Volcanes"></img>
      </div>
      <div className="BuStopAZ">
        <div>
          <button className="mButton" onClick={openModal}>
            Ver más información
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Modal"
            style={modalStyle}
          >
            <h1>Aguas Zarcas</h1>
            <p ref={(_AZInfo) => (AZInfo = _AZInfo)}>
              {" "}
              En Aguas Zarcas, la cultura y la naturaleza se entrelazan en una
              danza armoniosa que te sorprenderá en cada rincón. Pasea por sus
              calles pintorescas y admira las coloridas casas que reflejan la
              esencia de la tradición costarricense. Sumérgete en los mercados
              locales, donde los aromas de frutas tropicales y café recién
              tostado llenarán tus sentidos. No puedes dejar de probar la
              deliciosa gastronomía típica, que combina sabores auténticos con
              ingredientes frescos de la región. Además, Agua Zarcas ofrece
              oportunidades únicas para los amantes del ecoturismo, con
              emocionantes actividades como el avistamiento de aves exóticas,
              emocionantes recorridos en kayak por los ríos serpenteantes y
              emocionantes excursiones a reservas naturales cercanas. Ya sea que
              busques una escapada tranquila o una aventura llena de adrenalina,
              Agua Zarcas te ofrece el escenario perfecto para una experiencia
              memorable y enriquecedora. Ven a descubrir este paraíso escondido
              y déjate seducir por la magia de Agua Zarcas, un destino que te
              conquistará con su encanto incomparable y su espíritu acogedor.
              ¡La aventura te aguarda en este rincón de Costa Rica que te
              enamorará desde el primer instante!
            </p>
            <button className="mButton" onClick={closeModal}>
              Close
            </button>
          </Modal>
        </div>
        <img
          src="img/centro.jpg"
          className="img-fluid mx-auto"
          alt="Centro Aguas Zarcas"
        ></img>
      </div>
      <div className="BImgs">
        <img
          src="img/centro-civ.jpg"
          className="img-fluid mx-auto rounded"
          alt="Centro Civica"
        ></img>
        <img
          src="img/escuelaAZ.jpg"
          className="img-fluid mx-auto rounded"
          alt="Escuela San Jose"
        ></img>
        <img
          src="img/Catarata.jpg"
          className="img-fluid mx-auto rounded"
          alt="Catarata La Fortuna"
        ></img>
      </div>
      <div className="LeavingAZ">
        <div>
          <button className="mButton" onClick={openModal}>
            Ver más información
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Modal"
            style={modalStyle}
          >
            <h1>Aguas Zarcas</h1>
            <p ref={(_AZInfo2) => (AZInfo2 = _AZInfo2)}>
              {" "}
              En Aguas Zarcas, la cultura y la naturaleza se entrelazan en una
              danza armoniosa que te sorprenderá en cada rincón. Pasea por sus
              calles pintorescas y admira las coloridas casas que reflejan la
              esencia de la tradición costarricense. Sumérgete en los mercados
              locales, donde los aromas de frutas tropicales y café recién
              tostado llenarán tus sentidos. No puedes dejar de probar la
              deliciosa gastronomía típica, que combina sabores auténticos con
              ingredientes frescos de la región. Además, Agua Zarcas ofrece
              oportunidades únicas para los amantes del ecoturismo, con
              emocionantes actividades como el avistamiento de aves exóticas,
              emocionantes recorridos en kayak por los ríos serpenteantes y
              emocionantes excursiones a reservas naturales cercanas. Ya sea que
              busques una escapada tranquila o una aventura llena de adrenalina,
              Agua Zarcas te ofrece el escenario perfecto para una experiencia
              memorable y enriquecedora. Ven a descubrir este paraíso escondido
              y déjate seducir por la magia de Agua Zarcas, un destino que te
              conquistará con su encanto incomparable y su espíritu acogedor.
              ¡La aventura te aguarda en este rincón de Costa Rica que te
              enamorará desde el primer instante!
            </p>
            <button className="mButton" onClick={closeModal}>
              Cerrar
            </button>
          </Modal>
        </div>
        <div className="AZFooterImg">
          <img
            src="img/leaving.jpg"
            className="img-fluid mx-auto"
            alt="Centro Aguas Zarcas"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default AZPage;
