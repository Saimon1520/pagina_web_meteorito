import React from "react";
import './ShowPeople.css';
import CarouselComponent from "../carousel/Carousel";


const ShowPeople = ({type}) => {
    const dataMembers = [
        //{ Image: 'pictures/staff/Cris.jpg', Name: 'Cristopher S.H.', Role: 'Museo Virtual <br />Desarrollo de Videojuegos<br/>Desarrollo Web<br/>Fotogrametría 3D' },
        //{ Image: 'pictures/staff/Stef.jpg', Name: 'Stefany G.R.', Role: 'Realidad Aumentada <br />Desarrollo de Videjuegos<br/>Fotogrametría 3D <br/>' },
        { Image: 'pictures/staff/Pam.jpg', Name: 'Pamela M.A.', Role: 'Museo Virtual <br />Diseño 3D <br />Desarrollo de Videojuegos <br/>' },
        { Image: 'pictures/staff/Dave.jpg', Name: 'Deivy C.C.', Role: 'Desarollo Web <br />Desarrollo de Videojuegos<br/>Fotogrametría 3D <br/>' },
        { Image: 'pictures/staff/Saimon.jpg', Name: 'Saimon V.P.', Role: 'Desarrollo Web<br />Desarrollo de Videojuegos<br/>Fotogrametría 3D<br/>' },
        { Image: 'pictures/staff/Oscar.jpg', Name: 'Oscar E.L.', Role: 'Desarrollo Web <br />Desarrollo de Videojuegos<br/>' },
        { Image: 'pictures/staff/Jimmy.jpg', Name: 'Jimmy U.M.', Role: 'Realidad Aumentada <br />Desarrollo de Videjuegos<br/><br/>' },
        { Image: 'pictures/staff/Andrey.jpg', Name: 'Andrey G.V.', Role: 'Desarrollo de Videjuegos<br/>Desarrollo Web   <br/>' },
        { Image: 'pictures/staff/Tony.jpg', Name: 'Anthony T.V.', Role: '<br/>Desarrollo de Videojuegos<br/><br/><br/>' },
        { Image: 'pictures/staff/Kim.jpg', Name: 'Kimberly C.V.', Role: '<br/>Desarrollo de Videojuegos<br/><br/><br/>' },
        { Image: 'pictures/staff/JuanD.jpg', Name: 'Juan Daniel G.C.', Role: '<br/>Desarrollo de Videojuegos<br/><br/> <br/>' },
    ]

    const dataCollabs = [
        { Image: 'pictures/collabs/Deni.jpg', Name: 'Denixson C.H.', Role: 'Consultor <br> Estudiante de Arquitectura' },
       
    ]


    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

    return (
        <>
        <div>
            
           <CarouselComponent Section="Miembros Destacados" TC='MD' dataCard={shuffleArray(dataMembers)} ></CarouselComponent>
          
        </div>
          <div>
          <CarouselComponent Section="Collaboradores" TC='CL' dataCard={shuffleArray(dataCollabs)}></CarouselComponent>
          </div>

        </>
    )
}

export default ShowPeople;