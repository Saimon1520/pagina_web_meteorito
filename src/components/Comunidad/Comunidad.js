import CarouselA from '../AreasCarousel/carousel';
import './Comunidad.css';

const Comunidad = () => {

    const dataAreas = [
        { Image: 'vr.jpg', Name: 'Realidad Virtual', Role: 'Museo Virtual | Diseño 3D | Desarrollo de Videojuegos' },
        { Image: 'ar.jpg', Name: 'Realidad Aumentada', Role: 'Desarollo Web | Desarrollo de Videojuegos | Fotogrametría 3D' },
        { Image: 'wd.jpg', Name: 'Diseño Web', Role: 'Desarrollo Web | Desarrollo de Videojuegos | Fotogrametría 3D' },
        { Image: 'gd.jpg', Name: 'Desarrollo de Videojuegos', Role: 'Desarrollo Web | Desarrollo de Videojuegos' },
        { Image: 'ml.jpg', Name: 'Machine Learning', Role: 'Realidad Aumentada | Desarrollo de Videjuegos' },

    ]


    return (
        <div className='Comunidad'>
            <div>
                <section>
                    <img src='imgs/logo_codein.png' className='img-fluid' alt='Logo'></img>
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