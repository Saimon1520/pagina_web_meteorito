import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function ABR02(props) {
  const { nodes, materials } = useGLTF('objects/ABR02_reduce.gltf')
  return (
    <group {...props} dispose={null} position={[0,-0.5,0]}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} position={[0, 0.294, 0]} scale={[0.604, 0.058, 0.604]} />
      <mesh geometry={nodes.ABR02.geometry} material={materials.Material} position={[0, 0.705, 0]} rotation={[-1.514, -0.89, 2.818]} scale={2.658} />
    </group>
  )
}

useGLTF.preload('objects/ABR02_reduce.gltf')