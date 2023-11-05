import './Obj.css';
import React, { useState } from 'react';
import {Canvas} from 'react-three-fiber'
import { Suspense } from 'react';
import {OrbitControls} from '@react-three/drei'
const Obj = (props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
    return (
        <div className='OBJ'>
        <Canvas camera={{ zoom: 30, position: [0, 0, 30] }}>
          <directionalLight position={[0, 0, 1]} intensity={1.5} />
          <directionalLight position={[1, 0, 1]} intensity={1.5} />
          <directionalLight position={[3, 0, 1]} intensity={1.5} />
          <directionalLight position={[5, 0, 1]} intensity={1.5} />
          <directionalLight position={[-10, 0, 1]} intensity={1.5} />
          <directionalLight position={[0, 0, -1]} intensity={1.5} />
          <directionalLight position={[20, 10, 1]} intensity={1} />
          <pointLight position={[0.033, 0.662, -0.022]} intensity={0.3} />
          <Suspense fallback={null}>
            <props.obj className='Prueba' />
          </Suspense>
          <OrbitControls enableDamping={true} maxPolarAngle={Math.PI / 2} minDistance={33} maxDistance={65} />
        </Canvas>
        <div className='div_titulo_obj' onClick={togglePopup}>
          <h1 className='titulo_obj'>{props.titulo} </h1>
        </div>
        {isPopupOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <div className='popup-title' onClick={togglePopup}>
              <h1>{props.titulo}</h1>
            </div>
            <p>{props.descripcion}</p>
            <button onClick={togglePopup}>Cerrar</button>
          </div>
        </div>
      )}
      </div>
    )
}

export default Obj;