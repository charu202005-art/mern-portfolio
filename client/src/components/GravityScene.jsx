import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function AnimatedMesh() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.15;
      meshRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.2, 0.38, 160, 18]} />
        <meshStandardMaterial
          color="#00f0ff"
          wireframe
          emissive="#002d3a"
          emissiveIntensity={1.2}
          roughness={0.05}
          metalness={0.95}
        />
      </mesh>
    </Float>
  );
}

export default function GravityScene() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 4.5] }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#bd00ff" />
        <directionalLight position={[0, 5, 2]} intensity={1.5} />

        <AnimatedMesh />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}