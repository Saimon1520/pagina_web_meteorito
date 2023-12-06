import './Meteoritos.css';
import Accordion from 'react-bootstrap/Accordion';

import React, { useState, useEffect } from 'react';

import Barra_Meteoritos from '../Barra_Obj/Barra_Obj'
const Meteoritos = () => {
    const [showFullText, setShowFullText] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const textDefinition =
        'La Real Academia Española lo define como: “Fragmento de un cuerpo celeste que cae sobre la Tierra, o' +
        'sobre un astro cualquiera”. Si bien es cierto, observar la caída de fragmentos de cuerpos celestes a la tierra es para' +
        'el ser humano un hecho hermoso de admirar, sin embargo, no es un acontecimiento poco cotidiano, según Lücke, Madrigal y' +
        ' Soto (2019), pese a que sobre la Tierra caen unos 25 meteoritos cada día, aquellos que son vistos caer y recuperados alcanzan' +
        'sólo unos 5 a 10 al año. (p.10).' +
        'Es particularmente importante para la comunidad científica el hallazgo del Meteorito Aguas Zarcas, ya que abrirá nuevas' +
        'oportunidades de investigación y arrojará datos interesantes sobre cómo se formó el sistema solar y sobre el origen de la' +
        'vida en la Tierra.';

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleText = () => {
        console.log('Toggle text clicked');
        setShowFullText(!showFullText);
    };
    return (
        <div className='Meteoritos'>
            <div className='definition_and_image_container'>

                <div className='image_container'>
                    <img src='imgs/met001.jpg' alt="Meteorito Image" />
                </div>
                <div className='definition_container' onClick={() => toggleText()} >
                    <div className='text_container' >
                        <p className='text_definition' >
                            {windowWidth < 768 && !showFullText
                                ? textDefinition.slice(0, 150) + '...' // Display truncated text on small screens
                                : textDefinition}{' '}
                            {/* Display full text or truncated text based on window width */}
                            {windowWidth < 768 && (
                                <span className='see-more' >
                                    {showFullText ? 'Ver menos' : 'Ver más'}
                                </span>
                            )}
                        </p>
                    </div>
                    <div className='source_container'>
                        <span>Fuente: Universidad Técnica Nacional</span>
                    </div>
                </div>

            </div>
            <div className="frag_and_title_container">
                <div className='title_container'>
                    <h1 className='title_frag'>Fragmentos encontrados del meteorito de Aguas Zarcas</h1>
                </div>
                <Barra_Meteoritos></Barra_Meteoritos>
            </div>

            <div className='info_AZ_container'>

                <div className='title_container'>
                    <h2>Se pueden citar algunos aspectos que hacen particularmente importante el meteorito Aguas Zarcas:</h2>
                </div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Aspecto #1</Accordion.Header>
                        <Accordion.Body>
                            Es muy poco probable que un meteorito sea bautizado con el nombre del lugar donde cayó, a través de la historia únicamente se han registrado 1196 meteoritos que toman el nombre del lugar.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Aspecto #2</Accordion.Header>
                        <Accordion.Body>
                            La mayoría de los meteoritos que aterrizan en la tierra son trozos de piedra o metal, en el caso del meteorito Aguas Zarcas es una condrita carbonácea, un remanente  del Sistema Solar primitivo.  Esta particularidad es la que le brinda el valor histórico – científico al Meteorito Aguas Zarcas, según la astrofísica Carolina Salas Matamoros, investigadora del Centro de Investigaciones Espaciales (Cinespa) de la UCR, explica que el meteorito de Aguas Zarcas es de suma  importancia para el estudio sobre la formación del sistema solar en su etapa inicial, e indica que, este meteorito está compuesto por moléculas orgánicas, como los aminoácidos, que son la base de las proteínas y desempeñan un papel clave en casi todos los procesos biológicos.

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Aspecto #3</Accordion.Header>
                        <Accordion.Body>
                            Solo se han registrado dos meteoritos a nivel mundial con estas características, en 1969 cayó en Murchison, un pueblo ganadero australiano, un meteorito con estas mismas características, de los cuales se recogieron alrededor de 100 kilogramos de este. Y en el 2019 en el distrito de Aguas Zarcas, donde se recolectaron aproximadamente 30 kilogramos. Según investigadores hace más de cincuenta años que cayó el meteorito Murchison, no se tenía la tecnología con la que se cuenta ahora para realizar las pruebas e investigación como con el Meteorito Aguas Zarcas, razón por la cual aumenta el valor de este.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}
export default Meteoritos;