import './Barra_Obj.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect, Suspense } from 'react';
import Obj from '../Obj/Obj';
import ABR02 from '../../../public/objects/ABR02/ABR02';
import DAA01 from '../../../public/objects/DAA01/DAA01';
import ERB02 from '../../../public/objects/ERB02/ERB02';
import ERB03 from '../../../public/objects/ERB03/ERB03';
import ESS01 from '../../../public/objects/ESS01/ESS01';
import MAA01 from '../../../public/objects/MAA01/MAA01';
import OBJ_6 from '../../../public/objects/OBJ_6/OBJ_6';
import RM01 from '../../../public/objects/RM01/RM01';
import Spin from '../Spinner/Spinner';
const Barra_Obj = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(getInitialItemsPerPage());

  // Tu lista de objetos
  const listaDeObjetos = [
    { obj: OBJ_6, titulo: "Fragmento 6", descripcion: "Descripción 1", src: "../../../public/objects/OBJ_6/OBJ_6" },
    { obj: RM01, titulo: "RM01", descripcion: "Descripción 2", src: "../../../public/objects/RM01/RM01" },
    { obj: DAA01, titulo: "DAA01", descripcion: "Descripción 3", src: "../../../public/objects/DAA01/DAA01" },
    { obj: ABR02, titulo: "ABR02", descripcion: "Descripción 4", src: "../../../public/objects/ABR02/ABR02" },
    { obj: ERB02, titulo: "ERB02", descripcion: "Descripción 5", src: "../../../public/objects/ERB02/ERB02" },
    { obj: ERB03, titulo: "ERB03", descripcion: "Descripción 6", src: "../../../public/objects/ERB03/ERB03" },
    { obj: ESS01, titulo: "ESS01", descripcion: "Descripción 7", src: "../../../public/objects/ESS01/ESS01" },
    { obj: MAA01, titulo: "MAA01", descripcion: "Descripción 8", src: "../../../public/objects/MAA01/MAA01" },
  ];

  // Función para dividir la lista en grupos de 3 o 1
  const divideListaEnGrupos = (lista, itemsPorPagina) => {
    const grupos = [];
    for (let i = 0; i < lista.length; i += itemsPorPagina) {
      grupos.push(lista.slice(i, i + itemsPorPagina));
    }
    return grupos;
  };

  const gruposDeObjetos = divideListaEnGrupos(listaDeObjetos, itemsPerPage);

  useEffect(() => {
    function handleResize() {
      setItemsPerPage(getInitialItemsPerPage()); getInitialItemsPerPage
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getInitialItemsPerPage() {
    return window.innerWidth < 1025 ? 1 : 3;
  }

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < gruposDeObjetos.length) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='Barra_Obj'>
      <div>
        <button className='buttonx' onClick={() => handlePageChange('prev')}>
          <FontAwesomeIcon icon={faChevronUp} size='xl' />
        </button>
      </div>
      <div className='obj-container spinner-container'>
        {gruposDeObjetos[currentPage - 1].map((obj, index) => (
          <Suspense fallback={<Spin></Spin>}>
            <Obj key={index} obj={obj.obj} titulo={obj.titulo} descripcion={obj.descripcion} src={obj.src} />
          </Suspense>
        ))}
      </div>
      <div className='button_abajo'>
        <button className='buttonx' onClick={() => handlePageChange('next')}>
          <FontAwesomeIcon icon={faChevronDown} size='xl' />
        </button>
      </div>
    </div>
  );
};

export default Barra_Obj;