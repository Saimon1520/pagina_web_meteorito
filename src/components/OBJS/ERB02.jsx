import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function ERB02(props) {
  const { nodes, materials } = useGLTF('/ERB02_reduce.gltf')
  return (
    <group {...props} dispose={null} position={[0,-0.5,0]}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} position={[0, 0.294, 0]} scale={[0.604, 0.058, 0.604]} />
      <mesh geometry={nodes.erb02.geometry} material={materials.erb02} position={[0, 0.766, 0]} rotation={[1.231, 0.21, 0.186]} scale={2.415} />
    </group>
  )
}

useGLTF.preload('/ERB02_reduce.gltf')