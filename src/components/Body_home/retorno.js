import './retorno.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const Retorno = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      src: "/Imagenes/foto3.jpg",
      text: "El meteorito Agua Zarcas cuenta con más de 4500 millones de años.",
    },
    {
      src: "/Imagenes/foto1.png",
      text: "En una subasta en Estados Unidos, la casa de Roky que fue impactada por un meteorito en San Carlos fue inicialmente ofertada con un precio base de ₡191 millones.",
    },
    {
      src: "/Imagenes/foto2.jpeg",
      text: "La universidad técnica nacional de la sede de San Carlos realizó un mapa guia de la caída de meteoritos.",
    },
    {
      src: "/Imagenes/foto4.jpg",
      text: "El evento del bólido de Aguas Zarcas se refiere a un fenómeno astronómico que tuvo lugar en la noche del 23 de abril de 2019 en la localidad de Aguas Zarcas, en la zona norte de Costa Rica, alrededor de las 9:09 p.m. hora local. Este fenómeno se trata de la observación de un bólido o una gran bola de fuego en el cielo.",
    },
    {
      src: "/Imagenes/foto5.jpg",
      text: "Este meteorito es notable debido a que impactó en la Tierra y se recuperó rápidamente, antes de que sufriera contaminación por el contacto humano o fuera expuesto a la lluvia, lo que habría provocado la disolución de algunos de sus componentes solubles.",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div>
      <div className='Primero'>
        <div className='pp'>
          <h1 className='titulo1'>TE DAMOS LA <br />BIENVENIDA A<br />NUESTRO <br />MUSEO<br /> VIRTUAL</h1>
          <p className='parrafo1'>Un proyecto desarrollado por<br />estudiantes universitarios con el<br />propósito de poder brindar la <br />experiencia deseada por muchos</p>
        </div>
        <div className='foto'>
          <img className='Imagen_perro' src="https://i.blogs.es/b80720/virtual/1024_2000.jpg" alt="Museo Virtual" />
        </div>
      </div>
      <div className='div2'>
        <h1 className='titulo2'>Noticias y curiosidades</h1>
        <div className='noticias_curiosidades'>
          <button
            className='boton'
            onClick={nextImage}
          ><FontAwesomeIcon icon={faChevronLeft} size='xl' /></button >
          <div className='borde'>
            <img
              src={images[currentImageIndex].src}
              className={`foto${currentImageIndex + 1} curiosidades`}
              alt={`Imagen ${currentImageIndex + 1}`}
            ></img>
            <p className='yu'>{images[currentImageIndex].text}</p>
          </div>
          <button
            className='boton'
            onClick={nextImage}
          ><FontAwesomeIcon icon={faChevronRight} size='xl' /></button>
        </div>
      </div>
      <div className='Principal3'>
        <h1 className='titulo3'>Acerca de</h1>
        <div className='Sub3'>
          <div className='contenendor3'>
            <p className='Acerca_de'>Este espacio se llena con información importante del proyecto</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retorno;
