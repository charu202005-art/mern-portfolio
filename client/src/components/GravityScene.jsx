import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function StellarNetwork() {
  const pointsRef = useRef();
  const sphereRef = useRef();

  const count = 120;
  const [positions] = useState(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = 1.35 + Math.random() * 0.45; // custom orbital expansion noise

      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.06;
      pointsRef.current.rotation.x = time * 0.04;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y = -time * 0.04;
      sphereRef.current.rotation.x = -time * 0.02;
    }
  });

  return (
    <group>
      {/* Dynamic Stellar Constellation Points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00f0ff"
          size={0.065}
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>

      {/* Connected Central Grid Structure */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1.25, 14, 14]} />
        <meshBasicMaterial
          color="#bd00ff"
          wireframe
          transparent
          opacity={0.16}
        />
      </mesh>
    </group>
  );
}

export default function GravityScene() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#bd00ff" />
        <directionalLight position={[0, 5, 2]} intensity={1.5} />

        <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.9}>
          <StellarNetwork />
        </Float>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}