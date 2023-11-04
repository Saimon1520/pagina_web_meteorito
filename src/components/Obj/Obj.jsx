import './Obj.css';
import {Canvas} from 'react-three-fiber'
import { Suspense } from 'react';
import {OrbitControls} from '@react-three/drei'
const Obj = (props) => {
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
          <OrbitControls enableDamping={true} maxPolarAngle={Math.PI / 2} minDistance={33} maxDistance={70} />
        </Canvas>
      </div>
    )
}

export default Obj;