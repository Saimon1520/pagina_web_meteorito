import './carousel.css'

const CarouselA = (props) => {
    
    return (
        <div id="carouselAreas" className="carousel slide carousel-fade" data-bs-ride="carousel">

            <div className="carousel-inner">
                {
                    props.dataAreas.map((data, index) => {
                        return (
                            <div className={`carousel-item ${index == 0 ? 'active' : ''} `} key={index}>
                                <img src={`./${data.Image}`} className="img-fluid" alt="..."></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{data.Name}</h5>
                                    <p>{data.Role}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselAreas" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselAreas" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default CarouselA;