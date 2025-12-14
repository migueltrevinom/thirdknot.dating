import { useRef, useMemo } from "react";
import { View } from "react-native";
import { Canvas, useFrame } from "@react-three/fiber/native";
import { Stars, Float, Environment } from "@react-three/drei/native";
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
        <torusKnotGeometry args={[1, 0.3, 128, 32, 2, 3]} />
        <meshStandardMaterial
          color="#FFD700" // Gold
          emissive="#FFD000"
          emissiveIntensity={0.2}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
    </Float>
  );
}

function Strands() {
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
    <View className="absolute inset-0 z-0" pointerEvents="none">
      <Canvas style={{ flex: 1 }} camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={["#030014"]} />
        
        {/* Manual Lighting Setup to replace Environment (fixing WeakMap crash) */}
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#FFD700" />
        <pointLight position={[0, 5, 0]} intensity={1} color="#00FFFF" /> {/* Cyan top light */}
        <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
        
        <Knot />
        <Strands />
        
        {/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} speed={1} /> */}
      </Canvas>
    </View>
  );
}
