import React, { useEffect, useRef, useState } from "react";
import jQuery from "jquery"; // Import jQuery as $
import * as bootstrap from 'bootstrap';

import './Carousel.css';
const CarouselComponent = (props) => {

  const [auxSP, setAuxSP] = useState(0);
  const autoRef = useRef(true); // Use a ref for auto
  const [cardWidthAX, setCardWith] = useState(jQuery(".carousel-item").width())

  // Define the event handler for the "carousel-control-next" button
  const handleNextClick = () => {
    var carouselWidth = jQuery(".carousel-inner")[0].scrollWidth;
    var cardWidth = jQuery(".carousel-item").width();
    var scrollPosition = 0;

    handleAutoSlide()

    setAuxSP((aux) => {
      if (aux < carouselWidth - cardWidth) {
        scrollPosition = aux + (cardWidth);
      } else {
        scrollPosition = 0;
      }
      jQuery("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
      return scrollPosition;
    });
  };

  // Define the event handler for the "carousel-control-prev" button
  const handlePrevClick = () => {

    var carouselWidth = jQuery(".carousel-inner")[0].scrollWidth;
    var cardWidth = jQuery(".carousel-item").width();
    var scrollPosition = 0;

    handleAutoSlide()

    setAuxSP((aux) => {

      if (aux > 0) {
        scrollPosition = aux - cardWidth;
      } else {
        scrollPosition = carouselWidth - (cardWidth*3);
      }
      jQuery("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
      return scrollPosition;
    });
  };


  useEffect(() => {
    var multipleCardCarousel = document.querySelector("#carouselExampleControls");
    var cardWidth = jQuery(".carousel-item").width();
    setCardWith(cardWidth);
    if (window.matchMedia("(min-width: 768px)").matches) {
    
      var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
      });

      // Attach the event handlers to the buttons
      jQuery("#carouselExampleControls .carousel-control-next").on("click", handleNextClick);
      jQuery("#carouselExampleControls .carousel-control-prev").on("click", handlePrevClick);
    } else {
      jQuery(multipleCardCarousel).addClass("slide");
    }

    // Clean up event handlers when the component unmounts
    return () => {
      jQuery("#carouselExampleControls .carousel-control-next").off("click", handleNextClick);
      jQuery("#carouselExampleControls .carousel-control-prev").off("click", handlePrevClick);
    };
  }, [handleNextClick, handlePrevClick]);


  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      const interval = setInterval(() => {
        console.log("joj", autoRef.current, auxSP);
        if (auxSP !== null && autoRef.current) {
          var carouselWidth = jQuery(".carousel-inner")[0].scrollWidth;
          var cardWidth = jQuery(".carousel-item").width();
          if (auxSP < carouselWidth - cardWidth * 3.5) {
            setAuxSP((prevAuxSP) => prevAuxSP + cardWidth);
            var carousel = new bootstrap.Carousel(document.querySelector("#carouselExampleControls"), {
              interval: false,
            });
            carousel.next();

          } else {
            setAuxSP(0);
          }
          jQuery("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: auxSP },
            600
          );
        } else {
          handleAutoSlide()
        }
      }, 3500);

      return () => clearInterval(interval);
    }
  }, [auxSP])

  const handleAutoSlide = () => {
    autoRef.current = !autoRef.current;
  };

  return (

    <div id="carouselExampleControls" className="carousel">
      <div className="carousel-inner">
        {props.dataCard &&
          props.dataCard.map((data, index) => {
            const isActive = index === auxSP / cardWidthAX; // Check if this card is active

            return (
              <div
                className={`carousel-item ${isActive == 0 ? 'active' : ''}`}
                key={index}
              >
                <div className={`card `}>
                  <div>
                    <div className="img-wrapper">
                      <picture>
                        <img src={data.Image} className="rounded-circle d-block w-100" alt="..." />
                      </picture>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title mx-auto d-bloc">{data.Name}</h5>
                      <p className="card-text text-center" dangerouslySetInnerHTML={{ __html: data.Role }} />
                    </div>

                  </div>
                </div>






              </div>
            );
          })}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default CarouselComponent;