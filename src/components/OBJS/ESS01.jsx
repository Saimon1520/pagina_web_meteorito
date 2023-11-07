import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function ESS01(props) {
  const { nodes, materials } = useGLTF('/objects/ESS01_reduce.gltf')
  return (
    <group {...props} dispose={null} position={[0,-0.5,0]}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} position={[0, 0.294, 0]} scale={[0.604, 0.058, 0.604]} />
      <mesh geometry={nodes['09E'].geometry} material={materials['09E']} position={[0, 0.612, 0]} rotation={[1.542, -0.456, 0]} scale={1.733} />
    </group>
  )
}

useGLTF.preload('/ESS01_reduce.gltf')