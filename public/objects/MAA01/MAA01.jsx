/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 MAA01.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('objects/MAA01/MAA01.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.294, 0]} scale={[0.604, 0.058, 0.604]}>
        <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cylinder_2.geometry} material={materials.Fragmento_Principal} />
      </group>
    </group>
  )
}

useGLTF.preload('objects/MAA01/MAA01.gltf')
