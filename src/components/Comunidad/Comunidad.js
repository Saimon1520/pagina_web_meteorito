import './Comunidad.css';
import ShowPeople from '../show-people-component/ShowPeople';

const Comunidad = () => {
    return (
        <div className='Comunidad'>
            <div>
                <section className='bg-body-secondary'>

                    <img src='../logo_codein.png' className='img-fluid'></img>


                </section>
                <section>
                    <div className='sectionDiv bg-dark'>
                        <div className='texto text-white'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet iaculis velit, quis facilisis odio. Nunc sagittis nibh ac malesuada dignissim. Aenean arcu leo, lobortis eget erat eu, hendrerit pulvinar nibh. Maecenas tristique turpis et elit auctor egestas. Suspendisse quis turpis id sem tristique lobortis at quis elit. Vestibulum quis neque at metus iaculis venenatis. Praesent lacinia efficitur justo non consequat. Suspendisse nunc erat, iaculis vitae eros quis, semper ornare felis.</p>
                        </div>
                        <div className='imgInfo'>
                            <div >
                                <h2 className='text-white'>
                                    Realidad Virtual
                                </h2>
                            </div>
                            <div className='halfImg bg-body-tertiary shadow-sm mx-auto'>
                                <img src='../vr.jpg' className='img-fluid'></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='sectionDiv bg-body-secondary'>

                        <div className='imgInfo'>
                            <div >
                                <h2 >
                                    Realidad Aumentada
                                </h2>
                            </div>
                            <div className='halfImg bg-body-tertiary shadow-sm mx-auto'>
                                <img src='../ar.jpg' className='img-fluid rounded mx-auto '></img>
                            </div>


                        </div>
                        <div className='texto'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet iaculis velit, quis facilisis odio. Nunc sagittis nibh ac malesuada dignissim. Aenean arcu leo, lobortis eget erat eu, hendrerit pulvinar nibh. Maecenas tristique turpis et elit auctor egestas. Suspendisse quis turpis id sem tristique lobortis at quis elit. Vestibulum quis neque at metus iaculis venenatis. Praesent lacinia efficitur justo non consequat. Suspendisse nunc erat, iaculis vitae eros quis, semper ornare felis.</p>

                        </div>
                    </div>
                </section>
                <section>
                    <div className='sectionDiv bg-dark'>
                        <div className='texto text-white'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet iaculis velit, quis facilisis odio. Nunc sagittis nibh ac malesuada dignissim. Aenean arcu leo, lobortis eget erat eu, hendrerit pulvinar nibh. Maecenas tristique turpis et elit auctor egestas. Suspendisse quis turpis id sem tristique lobortis at quis elit. Vestibulum quis neque at metus iaculis venenatis. Praesent lacinia efficitur justo non consequat. Suspendisse nunc erat, iaculis vitae eros quis, semper ornare felis.</p>

                        </div>
                        <div className='imgInfo'>
                            <div >
                                <h2 className='text-white'>
                                    Diseño Web
                                </h2>
                            </div>
                            <div className='halfImg bg-body-tertiary shadow-sm mx-auto'>
                                <img src='../wd.jpg' className='img-fluid'></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='sectionDiv bg-body-secondary '>

                        <div className='imgInfo'>
                            <div >
                                <h2 >
                                    Videojuegos
                                </h2>
                            </div>
                            <div className='halfImg bg-body-tertiary shadow-sm mx-auto'>
                                <img src='../gd.jpg' className='img-fluid'></img>
                            </div>


                        </div>

                        <div className='texto'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet iaculis velit, quis facilisis odio. Nunc sagittis nibh ac malesuada dignissim. Aenean arcu leo, lobortis eget erat eu, hendrerit pulvinar nibh. Maecenas tristique turpis et elit auctor egestas. Suspendisse quis turpis id sem tristique lobortis at quis elit. Vestibulum quis neque at metus iaculis venenatis. Praesent lacinia efficitur justo non consequat. Suspendisse nunc erat, iaculis vitae eros quis, semper ornare felis.</p>

                        </div>

                    </div>
                </section>
                <section>
                    <div className='sectionDiv bg-dark'>
                        <div className='texto text-white'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet iaculis velit, quis facilisis odio. Nunc sagittis nibh ac malesuada dignissim. Aenean arcu leo, lobortis eget erat eu, hendrerit pulvinar nibh. Maecenas tristique turpis et elit auctor egestas. Suspendisse quis turpis id sem tristique lobortis at quis elit. Vestibulum quis neque at metus iaculis venenatis. Praesent lacinia efficitur justo non consequat. Suspendisse nunc erat, iaculis vitae eros quis, semper ornare felis.</p>

                        </div>
                        <div className='imgInfo'>
                            <div >
                                <h2 className='text-white'>
                                    Machine Learning
                                </h2>
                            </div>
                            <div className='halfImg bg-body-tertiary shadow-sm mx-auto'>
                                <img src='../ml.jpg' className='img-fluid'></img>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='contact bg-body-secondary '>
                        <h2> Contactanos </h2>
                        <button type="button" class="btn btn-primary btn-lg">Ponerse en contacto</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Comunidad;