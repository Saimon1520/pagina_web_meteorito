import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Obj_6(props) {
  const { nodes, materials } = useGLTF('objects/obj_6.glb')
  return (
    <group {...props} dispose={null} position={[0,-0.5,0]}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} position={[0.01, 0.294, -0.009]} scale={[0.604, 0.058, 0.604]} />
      <mesh geometry={nodes.cap_6.geometry} material={materials.cap_6} position={[0.103, 0.149, 7.186]} rotation={[-Math.PI / 2, -1.464, -Math.PI]} scale={2.496} />
    </group>
  )
}

useGLTF.preload('objects/obj_6.glb')