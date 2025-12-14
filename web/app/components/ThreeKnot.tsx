"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function Knot(props: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh {...props} ref={meshRef}>
        {/* Radius, Tube, TubeSegments, RadialSegments, p, q */}
        <torusKnotGeometry args={[1, 0.3, 128, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#FFD700" // Gold
          emissive="#FFD000"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function Strands() {
    // A secondary wireframe knot to represent the "Structure" or the "Spirit"
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
             <mesh ref={meshRef} scale={[1.1, 1.1, 1.1]}>
                <torusKnotGeometry args={[1, 0.3, 128, 32, 2, 3]} />
                <meshBasicMaterial color="#00FFFF" wireframe transparent opacity={0.1} />
            </mesh>
        </Float>
       
    )
}

export default function ThreeKnot() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 opacity-60 md:opacity-100 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={["#030014"]} /> {/* Deep space match */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#FFD700" />
        
        <Knot />
        <Strands />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
