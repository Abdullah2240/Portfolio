'use client'

import { Canvas } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'

export default function AnimatedSphere() {
  return (
    <motion.div
      className="w-full h-96 rounded-3xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        <Sphere args={[1, 100, 200]} scale={2}>
          <MeshDistortMaterial
            color="#7c3aed"
            attach="material"
            distort={0.5}
            speed={1}
          />
        </Sphere>
      </Canvas>
    </motion.div>
  )
}
