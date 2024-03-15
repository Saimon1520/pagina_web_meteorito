import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function RM01(props) {
  const { nodes, materials } = useGLTF('objects/RM01.glb')
  return (
    <group {...props} dispose={null} position={[0,-0.5,0]}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} position={[0.027, 0.294, 0.024]} scale={[0.604, 0.058, 0.604]} />
      <mesh geometry={nodes.RM01.geometry} material={materials['Material.002']} position={[0.033, 0.662, -0.022]} rotation={[Math.PI / 2, 0, 0]} scale={2.496} />
    </group>
  )
}

useGLTF.preload('objects/RM01.glb')