"use client";

import { useEffect, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";
import { Timer } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ConstructionScene } from "./ConstructionScene";
import { detectPerformanceTier, PerformanceTier } from "@/lib/performance";

gsap.registerPlugin(ScrollTrigger);

function CameraPushIn({ progress, reducedMotion }: { progress: number; reducedMotion: boolean }) {
  const { camera } = useThree();

  useFrame(() => {
    if (reducedMotion) {
      camera.position.set(0, -0.02, 4.4);
      camera.lookAt(0, -0.02, 0);
      return;
    }

    // Stage 2: Camera push-in between scroll progress 0.74 -> 0.92
    const push = Math.max(0, Math.min(1, (progress - 0.74) / 0.18));
    const easedPush = 1 - Math.pow(1 - push, 3);

    const z = 7 - easedPush * 2.6;
    const y = 0.15 - easedPush * 0.17;

    camera.position.set(0, y, z);
    camera.lookAt(0, -0.02, 0);
  });

  return null;
}

export default function BrickWallScene({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const [progress, setProgress] = useState(reducedMotion ? 1 : 0);
  const [tier, setTier] = useState<PerformanceTier>("medium");

  // Custom THREE.Timer instance avoids deprecated THREE.Clock warning
  const customTimer = useMemo(() => new Timer(), []);

  useEffect(() => {
    setTier(detectPerformanceTier());
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const trigger = ScrollTrigger.create({
      trigger: "#construction-hero",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.35,
      onUpdate: (self) => setProgress(self.progress),
    });
    return () => trigger.kill();
  }, [reducedMotion]);

  const shadowMapSize = tier === "high" ? 1024 : tier === "medium" ? 512 : 256;
  const dpr: [number, number] = tier === "high" ? [1, 1.5] : tier === "medium" ? [1, 1.25] : [1, 1];

  return (
    <Canvas
      shadows={tier !== "low"}
      dpr={dpr}
      camera={{ position: [0, 0.15, 7], fov: 37 }}
      gl={{ antialias: tier !== "low", alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearColor("#000000", 0);
        gl.shadowMap.type = THREE.PCFShadowMap;
      }}
      frameloop={reducedMotion ? "demand" : "always"}
    >
      <fog attach="fog" args={["#25201c", 7, 14]} />
      <CameraPushIn progress={progress} reducedMotion={reducedMotion} />
      <ambientLight intensity={0.65} />
      <directionalLight
        position={[4, 7, 5]}
        intensity={2.5}
        color="#ffd9a5"
        castShadow={tier !== "low"}
        shadow-mapSize={[shadowMapSize, shadowMapSize]}
        shadow-bias={-0.0001}
      />
      <pointLight position={[-5, 1, 3]} intensity={7} distance={11} color="#c86b48" castShadow={false} />
      <ConstructionScene progress={progress} reducedMotion={reducedMotion} />
      <ContactShadows position={[0, -1.34, 0]} opacity={0.4} scale={10} blur={2.5} far={3} />
      <Environment preset="city" />
    </Canvas>
  );
}



