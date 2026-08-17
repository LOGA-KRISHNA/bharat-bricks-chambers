"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { WallLogo } from "./WallLogo";

type BrickState = {
  target: THREE.Vector3;
  start: THREE.Vector3;
  rotation: THREE.Euler;
  tone: string;
  delay: number;
};

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - Math.min(1, Math.max(0, value)), 3);
}

export function ConstructionScene({
  progress,
  reducedMotion,
}: {
  progress: number;
  reducedMotion: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const instancedRef = useRef<THREE.InstancedMesh>(null);
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const elapsedTimeRef = useRef(0);
  const { size } = useThree();

  const compact = size.width < 640;
  const columns = compact ? 6 : 11;
  const rows = compact ? 6 : 8;

  const bricks = useMemo<BrickState[]>(
    () =>
      Array.from({ length: columns * rows }).map((_, index) => {
        const row = Math.floor(index / columns);
        const column = index % columns;
        const target = new THREE.Vector3(
          (column - (columns - 1) / 2) * 0.77 + (row % 2 ? 0.385 : 0),
          -1.1 + row * 0.29,
          0
        );
        const start = new THREE.Vector3(
          Math.sin(index * 1.92) * 5,
          -2.1 + ((index * 13) % 18) / 5,
          -1.5 - ((index * 7) % 9) / 8
        );
        return {
          target,
          start,
          rotation: new THREE.Euler(
            ((index * 23) % 42) / 30,
            ((index * 43) % 70) / 35,
            ((index * 31) % 50) / 28
          ),
          tone: index % 5 === 0 ? "#873520" : index % 3 === 0 ? "#c5643e" : "#a9472d",
          delay: row * 0.045 + (index % columns) * 0.012,
        };
      }),
    [columns, rows]
  );

  // Shared geometry & material for InstancedMesh (1 draw call instead of 88)
  const brickGeometry = useMemo(() => new THREE.BoxGeometry(0.78, 0.28, 0.32), []);
  const bumpMap = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.fillStyle = "#808080";
    ctx.fillRect(0, 0, 128, 128);
    const imgData = ctx.getImageData(0, 0, 128, 128);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 45;
      const v = Math.min(255, Math.max(0, 128 + noise));
      imgData.data[i] = v;
      imgData.data[i + 1] = v;
      imgData.data[i + 2] = v;
    }
    ctx.putImageData(imgData, 0, 0);
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1.5, 0.7);
    return texture;
  }, []);

  const brickMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      roughness: 0.84,
      metalness: 0.02,
      bumpMap: bumpMap || undefined,
      bumpScale: 0.012,
    });
  }, [bumpMap]);

  useEffect(() => {
    return () => {
      brickGeometry.dispose();
      brickMaterial.dispose();
      if (bumpMap) bumpMap.dispose();
    };
  }, [brickGeometry, brickMaterial, bumpMap]);

  // Set instance colors once on mount / grid resize
  useEffect(() => {
    if (!instancedRef.current) return;
    const color = new THREE.Color();
    bricks.forEach((b, i) => {
      color.set(b.tone);
      instancedRef.current!.setColorAt(i, color);
    });
    if (instancedRef.current.instanceColor) {
      instancedRef.current.instanceColor.needsUpdate = true;
    }
  }, [bricks]);

  // Reuse transform objects inside frame loop to eliminate memory allocation
  const dummyMatrix = useMemo(() => new THREE.Matrix4(), []);
  const dummyPos = useMemo(() => new THREE.Vector3(), []);
  const dummyRot = useMemo(() => new THREE.Euler(), []);
  const dummyQuat = useMemo(() => new THREE.Quaternion(), []);
  const dummyScale = useMemo(() => new THREE.Vector3(1, 1, 1), []);

  const buildProgress = reducedMotion ? 1 : Math.min(1, progress / 0.60);
  const lightProgress = reducedMotion ? 1 : Math.max(0, Math.min(1, (progress - 0.76) / 0.18));
  const spotIntensity = lightProgress * 8.5;

  useFrame((_, delta) => {
    elapsedTimeRef.current += delta;
    if (group.current) {
      group.current.rotation.y = reducedMotion
        ? 0
        : Math.sin(elapsedTimeRef.current * 0.18) * 0.06 + (1 - buildProgress) * -0.21;
      group.current.position.y = reducedMotion ? 0 : (1 - buildProgress) * -0.15;
    }

    if (spotLightRef.current) {
      spotLightRef.current.intensity = spotIntensity;
    }

    if (instancedRef.current) {
      for (let i = 0; i < bricks.length; i++) {
        const brick = bricks[i];
        const normalizedDelay = (brick.delay / 0.435) * 0.35;
        const brickProgress = Math.max(0, buildProgress - normalizedDelay) / 0.65;
        const settled = easeOutCubic(reducedMotion ? 1 : brickProgress);

        dummyPos.lerpVectors(brick.start, brick.target, settled);
        dummyRot.set(
          (1 - settled) * brick.rotation.x,
          (1 - settled) * brick.rotation.y,
          (1 - settled) * brick.rotation.z
        );
        dummyQuat.setFromEuler(dummyRot);
        dummyMatrix.compose(dummyPos, dummyQuat, dummyScale);

        instancedRef.current.setMatrixAt(i, dummyMatrix);
      }
      instancedRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Instanced Mesh for all bricks (1 draw call) */}
      <instancedMesh
        ref={instancedRef}
        args={[brickGeometry, brickMaterial, bricks.length]}
        castShadow
        receiveShadow
      />

      {/* Ground plane & backing mortar frame */}
      <mesh position={[0, -1.35, -0.35]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial color="#2b2621" roughness={1} />
      </mesh>

      <group
        position={[0, 0.05, -0.2]}
        scale={[1, Math.min(1, Math.max(0, (progress - 0.45) / 0.35)), 1]}
      >
        <mesh position={[-4.52, 0, 0]}>
          <boxGeometry args={[0.12, 3.1, 0.6]} />
          <meshStandardMaterial color="#d6c3a1" roughness={0.8} />
        </mesh>
        <mesh position={[4.52, 0, 0]}>
          <boxGeometry args={[0.12, 3.1, 0.6]} />
          <meshStandardMaterial color="#d6c3a1" roughness={0.8} />
        </mesh>
        <mesh position={[0, 1.52, 0]}>
          <boxGeometry args={[9.15, 0.12, 0.6]} />
          <meshStandardMaterial color="#d6c3a1" roughness={0.8} />
        </mesh>
      </group>

      {/* Stage 3: Center Architectural Spotlight Accent */}
      <spotLight
        ref={spotLightRef}
        position={[0, 0.3, 2.5]}
        target-position={[0, 0.02, 0.1]}
        angle={0.7}
        penumbra={0.8}
        intensity={spotIntensity}
        color="#ffe2b8"
        castShadow={false}
      />

      {/* Stage 4: Centered 3D BBC Wall Logo */}
      <WallLogo progress={progress} compact={compact} reducedMotion={reducedMotion} />
    </group>
  );
}


