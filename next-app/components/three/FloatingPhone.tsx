'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

export default function FloatingPhone() {
  const phoneRef = useRef<THREE.Mesh>(null)
  const screenRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (phoneRef.current) {
      // Smooth floating animation
      phoneRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      phoneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      phoneRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={phoneRef}>
      {/* Phone Body */}
      <RoundedBox args={[1.2, 2.5, 0.2]} radius={0.1} smoothness={4}>
        <meshStandardMaterial
          color="#1a1d29"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Screen */}
      <RoundedBox
        ref={screenRef}
        args={[1.1, 2.3, 0.05]}
        radius={0.05}
        smoothness={4}
        position={[0, 0, 0.13]}
      >
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          metalness={0.1}
          roughness={0.4}
        />
      </RoundedBox>

      {/* Camera Notch */}
      <mesh position={[0, 1, 0.15]}>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 32]} />
        <meshStandardMaterial color="#0a0c10" />
      </mesh>

      {/* Logo on back */}
      <mesh position={[0, 0.8, -0.11]} rotation={[0, Math.PI, 0]}>
        <circleGeometry args={[0.15, 32]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Ambient light */}
      <pointLight position={[0, 0, 2]} intensity={0.5} color="#3b82f6" />
    </group>
  )
}
