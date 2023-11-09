import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function MAA01(props) {
  const { nodes, materials } = useGLTF('objects/MAA01.gltf')
  return (
    <group {...props} dispose={null} position={[0,-0.5,0]}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} position={[0, 0.294, 0]} scale={[0.604, 0.058, 0.604]} />
      <mesh geometry={nodes.Fragmento_Principal.geometry} material={materials.Fragmento_Principal} position={[0, 0.684, 0]} rotation={[1.263, 0, 0]} scale={[0.416, 0.397, 0.416]} />
    </group>
  )
}

useGLTF.preload('objects/MAA01.gltf')