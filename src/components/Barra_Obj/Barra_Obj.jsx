import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Barra_Obj.css';
import React, { useState, useEffect } from 'react';
import Obj_6 from '../OBJS/Obj_6';
import RM01 from '../OBJS/RM01';
import DAA01 from '../OBJS/DAA01'
import Obj from '../Obj/Obj';
import ABR02 from '../OBJS/ABR02';
import ERB02 from '../OBJS/ERB02';
import ERB03 from '../OBJS/ERB03';
import ESS01 from '../OBJS/ESS01';
import MAA01 from '../OBJS/MAA01';
const Barra_Obj = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(getInitialItemsPerPage());

  // Tu lista de objetos
  const listaDeObjetos = [
    { obj: Obj_6, titulo: "Fragmento 6", descripcion: "Descripción 1", src: "../OBJS/Obj_6" },
    { obj: RM01, titulo: "RM01", descripcion: "Descripción 2", src: "../OBJS/RM01" },
    { obj: DAA01, titulo: "DAA01", descripcion: "Descripción 3", src: "../OBJS/DAA01" },
    { obj: ABR02, titulo: "ABR02", descripcion: "Descripción 4", src: "../OBJS/ABR02" },
    { obj: ERB02, titulo: "ERB02", descripcion: "Descripción 5", src: "../OBJS/ERB02" },
    { obj: ERB03, titulo: "ERB03", descripcion: "Descripción 6", src: "../OBJS/ERB03" },
    { obj: ESS01, titulo: "ESS01", descripcion: "Descripción 7", src: "../OBJS/ESS01" },
    { obj: MAA01, titulo: "MAA01", descripcion: "Descripción 8", src: "../OBJS/MAA01" },
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
      setItemsPerPage(getInitialItemsPerPage());
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
          <Obj key={index} obj={obj.obj} titulo={obj.titulo} descripcion={obj.descripcion} src={obj.src} />
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