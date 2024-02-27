import './styles/La_Palmera.css'

const La_Palmera = () => {

    return (
        <div>
            <div className="container-fluid firstContainer text-center">
                <br></br>
                <h1 className='communityTitle'>CODE-IN</h1>
                <div className="row">
                    <div className="col-sm">
                        <h1 className='mt-5 Title1 mb-5'>La Palmera</h1>
                        <h2 className='mt-5 titleVR'>Virtual Reality Comunity</h2>
                    </div>
                    <div className="col-sm lj">
                        <img className='img-fluid my-3 mt-5 mb-5 firstImage' src='imgs/img1.png' alt='fgfg'></img>
                    </div>
                </div>
            </div>
            <div className="container-fluid secondContainer text-center">
                <div className='informatioContainer'>
                    <h1 className=' mt-5 Title3'>La Palmera</h1>
                    <div className="row">
                        <div className="col-sm">
                            <br />
                            <div>
                                <p className='informationField'>La palmera, tiene un proyecto socio-productivo administrado por la cual la Asociación de Desarrollo Integral el cuál es una planta de Carbonato de Calcio que promociona
                                    su producto para balancear el PH del suelo y así ayudar a los cultivos. La cabecera, cuenta con servicios de salud, educativos, restaurantes y locales de abarrotes.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm">
                            <br />
                            <div>
                                <p className='informationField'>La principal actividad de este lugar es la ganadería, y en menos proporción el cultivo de cítricos, caña de azúcar, raices y tubérculos. Se da también la explotación de carbonato de calcio.</p>
                            </div>
                        </div>
                    </div>
                    <img className='img-fluid my-3 mt-5 mb-5 secondImage' src='imgs/img2.jpg' alt='fgfg'></img>
                </div>


            </div>
            <div className="container-fluid thirdContainer text-center pb-4">
                <br></br>
                <div className="row">
                    <div className="col-sm">
                        <h1 className='mt-5 Title1'>TAMAÑO</h1>
                    </div>
                    <div className="col-sm">
                        <h2 className='mt-5 Title2'>La Palmera cuenta con un área de 100,45 km²</h2>
                    </div>
                </div>
                <br />
                <img className='img-fluid my-3 mt-5 mb-5 thirdImage' src='imgs/img3.png' alt='fgfg'></img>
            </div>
        </div >
    )
}

export default La_Palmera;