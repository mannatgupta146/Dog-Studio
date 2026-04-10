import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { DirectionalLight } from 'three'

const Dog = () => {

  const model = useGLTF('/model/dog.drc.glb')
  useThree(({camera, scene, gl}) => {
    camera.position.z = 0.9
  })

  return (
      <>
      <primitive object={model.scene} position={[0.2, -0.5, 0]} rotation={[0, Math.PI/4, 0]}/>
      <directionalLight position={[0, 5, 5]} intensity={10} color="#ffffff" />
      <OrbitControls/>
      </>
  )
}

export default Dog