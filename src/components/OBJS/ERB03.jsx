import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function ERB03(props) {
  const { nodes, materials } = useGLTF('objects/ERB03_reduce.gltf')
  return (
    <group {...props} dispose={null} position={[0,-0.5,0]}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} position={[0, 0.294, 0]} scale={[0.604, 0.058, 0.604]} />
      <mesh geometry={nodes.ERB03.geometry} material={materials.Material} position={[0, 0.699, 0]} rotation={[1.067, 0.091, 0.093]} scale={0.81} />
    </group>
  )
}

useGLTF.preload('objects/ERB03_reduce.gltf')