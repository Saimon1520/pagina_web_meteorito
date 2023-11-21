import CarouselA from '../AreasCarousel/carousel';
import './Comunidad.css';

const Comunidad = () => {

    const dataAreas = [
        { Image: 'vr.jpg', Name: 'Realidad Virtual', Role: 'Museo Virtual <br />Diseño 3D <br />Desarrollo de Videojuegos <br/>' },
        { Image: 'ar.jpg', Name: 'Realidad Aumentada', Role: 'Desarollo Web <br />Desarrollo de Videojuegos<br/>Fotogrametría 3D <br/>' },
        { Image: 'wd.jpg', Name: 'Diseño Web', Role: 'Desarrollo Web<br />Desarrollo de Videojuegos<br/>Fotogrametría 3D<br/>' },
        { Image: 'gd.jpg', Name: 'Desarrollo de Videojuegos', Role: 'Desarrollo Web <br />Desarrollo de Videojuegos<br/>' },
        { Image: 'ml.jpg', Name: 'Machine Learning', Role: 'Realidad Aumentada <br />Desarrollo de Videjuegos<br/><br/>' },

    ]


    return (
        <div className='Comunidad'>
            <div>
                <section>

                    <img src='../logo_codein.png' className='img-fluid'></img>


                </section>
                <section>
                    <div className='sectionDiv bg-d'>
                        <div className='texto'>
                            <h2 className='text-white'>
                                Somos una comunidad de estudiantes que buscan expandir su conocimiento mientras resuelven problematicas de caracter social con nuevas tecnologias.
                            </h2>
                        </div>
                    </div>
                </section>
                <section>
                    <CarouselA dataAreas={dataAreas}></CarouselA>
                </section>
            </div>
        </div>
    )
}

export default Comunidad;