'use client'

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import type { Mesh } from 'three'

function Sphere() {
  const meshRef = useRef<Mesh>(null!)
  const ringRef = useRef<Mesh>(null!)
  const innerRef = useRef<Mesh>(null!)
  const { pointer } = useThree()

  useFrame(() => {
    if (!meshRef.current) return

    meshRef.current.rotation.y += 0.005
    const tx = -pointer.y * 0.4
    const ty = pointer.x * 0.6
    meshRef.current.rotation.x += (tx - meshRef.current.rotation.x) * 0.08
    meshRef.current.rotation.y += (ty - meshRef.current.rotation.y) * 0.08

    if (innerRef.current) {
      innerRef.current.rotation.x = meshRef.current.rotation.x * 0.5
      innerRef.current.rotation.y = meshRef.current.rotation.y * 0.5
    }

    if (ringRef.current) {
      ringRef.current.rotation.x += 0.008
      ringRef.current.rotation.z += 0.004
      ringRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.15
    }
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhysicalMaterial
          transmission={0.9}
          roughness={0.05}
          metalness={0.85}
          ior={1.5}
          thickness={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          color="#c4b5fd"
        />
      </mesh>
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshPhysicalMaterial
          color="#818cf8"
          emissive="#818cf8"
          emissiveIntensity={0.15}
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[2.15, 0.025, 16, 100]} />
        <meshPhysicalMaterial
          color="#a78bfa"
          transparent
          opacity={0.25}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </group>
  )
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} gl={{ antialias: true }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#818cf8" />
      <Sphere />
    </Canvas>
  )
}
