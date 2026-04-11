import React from 'react'
import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { DirectionalLight } from 'three'

const Dog = () => {

  const model = useGLTF('/model/dog.drc.glb')
  useThree(({camera, scene, gl}) => {
    camera.position.z = 0.75
  })

  const textures = useTexture({
    normalMap: "/dog_normals.jpg"
  })

  textures.normalMap.flipY = false

  model.scene.traverse((child) => {
    if(child.name.includes('DOG')){
      child.material = new THREE.MeshMatcapMaterial({
        normalMap: textures.normalMap,
      })
    }
  })


  return (
      <>
      <primitive object={model.scene} position={[0.2, -0.5, 0]} rotation={[0, Math.PI/3.8, 0]}/>
      <directionalLight position={[0, 5, 5]} intensity={10} color="#ffffff" />
      <OrbitControls/>
      </>
  )
}

export default Dog