import React, { useEffect } from "react";
import './Carousel.css';

const CarouselComponent = (props) => {

    //Clone the items into a slide to show them all
    useEffect(() => {
        let item = '#featureContainer' + props.TC;
        //select the carousel
        const myCarousel = document.querySelectorAll(item + ' .carousel .carousel-item');
        const minPerSlide = 5;
        console.log(item, myCarousel)
            if (minPerSlide < props.dataCard.length) {
                myCarousel.forEach((el) => {
            
                    let next = el.nextElementSibling;
                    for (let i = 1; i < minPerSlide; i++) {
                        if (!next) {
                            // wrap carousel by using the first child
                            next = myCarousel[0];
                        }
                        const cloneChild = next.cloneNode(true);
                        el.appendChild(cloneChild.children[0]);
                        next = next.nextElementSibling;
                    }
                });
            }
        


    }, []);


    return (
        <div className="container my-3 mt-5 featureContainer" id={"featureContainer" + props.TC}>
        <div className="row mx-auto my-auto justify-content-center">
          <div id={"featureCarousel" + props.TC} className="carousel slide" data-bs-ride="carousel" >
            <h2 className="font-weight-light float-start mt-5">{props.Section}</h2>
            <div className="float-end pe-md-4">
              <a className="indicator" href="#featureCarousel" role="button" data-bs-slide="prev">
                <span className="fas fa-chevron-left" aria-hidden="true"></span>
              </a>
              &nbsp;&nbsp;
              <a className="w-aut indicator" href="#featureCarousel" role="button" data-bs-slide="next">
                <span className="fas fa-chevron-right" aria-hidden="true"></span>
              </a>
            </div>
            <div className="carousel-inner" role="listbox">
              {
                props.dataCard ? props.dataCard.map((data, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <div className="col-md-3 cc">
                      <div className="card h-100">
                        <picture>
                          <img src={data.Image} className="img-thumbnail rounded-circle  mx-auto d-block  w-100 h-100" alt="..."></img>
                        </picture>
                        <div className="card-body">
                          <h5 className="card-title mx-auto d-bloc">{data.Name}</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            <p className="card-text text-center" dangerouslySetInnerHTML={{ __html: data.Role }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                )) : <></>
              }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={'#featureCarousel' + props.TC} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={'#featureCarousel' + props.TC} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
          </div>
        </div>
        
      </div >
    )
}

export default CarouselComponent;