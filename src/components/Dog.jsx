import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'

const Dog = () => {

  useThree(({camera, scene, gl}) => {
    console.log(camera.position)
  })

  return (
      <mesh>
          <meshBasicMaterial color={0xff0000} />
          <boxGeometry args={[1, 1, 1]} />
      </mesh>
  )
}

export default Dog