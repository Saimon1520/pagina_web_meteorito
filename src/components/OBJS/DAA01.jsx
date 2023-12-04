import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function DAA01(props) {
  const { nodes, materials } = useGLTF('objects/DAA01_reduce.gltf')
  return (
    <group {...props} dispose={null} position={[0,-0.5,0]}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} position={[0.009, 0.291, -0.057]} scale={[0.604, 0.058, 0.604]} />
      <mesh geometry={nodes.DAA01.geometry} material={materials.Material} position={[0.042, 0.641, -0.061]} rotation={[1.386, 0, 0]} scale={0.705} />
    </group>
  )
}

useGLTF.preload('objects/DAA01_reduce.gltf')