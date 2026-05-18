'use client'

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import type { Mesh } from 'three'

function Sphere() {
  const meshRef = useRef<Mesh>(null!)
  const { pointer } = useThree()

  useFrame(() => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += 0.005
    const targetX = -pointer.y * 0.3
    const targetY = pointer.x * 0.5
    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.05
    meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.05
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshPhysicalMaterial
        transmission={0.92}
        roughness={0.05}
        metalness={0.8}
        ior={1.5}
        thickness={0.5}
        clearcoat={1}
        clearcoatRoughness={0.1}
        color="#c4b5fd"
      />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} gl={{ antialias: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, -5, -5]} intensity={0.4} />
      <Sphere />
    </Canvas>
  )
}
