"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Timer } from "three";
import { BrickWall } from "./BrickWall";

function RotatingWall({ color }: { color: string }) {
  const group = useRef<THREE.Group>(null);
  const elapsedRef = useRef(0);

  useFrame((_, delta) => {
    elapsedRef.current += delta;
    if (group.current) {
      group.current.rotation.y = Math.sin(elapsedRef.current * 0.35) * 0.22 - 0.34;
    }
  });

  return (
    <group ref={group}>
      <BrickWall rows={5} columns={7} color={color} />
    </group>
  );
}

export default function BrickMaterialPreview({ accent }: { accent: string }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.15, 4.2], fov: 42 }}
      gl={{ powerPreference: "high-performance", antialias: true }}
    >
      <color attach="background" args={["#e7dfd3"]} />
      <ambientLight intensity={1.3} />
      <directionalLight position={[3, 5, 4]} intensity={2.3} />
      <RotatingWall color={accent} />
      <ContactShadows position={[0, -1, 0]} scale={7} blur={2.4} opacity={0.25} />
      <OrbitControls enablePan={false} minDistance={3} maxDistance={6} enableZoom={false} autoRotate={false} />
    </Canvas>
  );
}


