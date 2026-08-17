"use client";

import { useEffect, useState } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";

interface WallLogoProps {
  progress: number;
  compact: boolean;
  reducedMotion?: boolean;
}

export function WallLogo({ progress, compact, reducedMotion = false }: WallLogoProps) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load("/bbc-logo.png", (loadedTex) => {
      loadedTex.colorSpace = THREE.SRGBColorSpace;
      loadedTex.minFilter = THREE.LinearFilter;
      loadedTex.magFilter = THREE.LinearFilter;
      setTexture(loadedTex);
    });
  }, []);

  // Timeline calculation
  // 0.85 -> 0.96 : Logo reveal (fade & subtle scale)
  const revealProgress = reducedMotion ? 1 : Math.max(0, Math.min(1, (progress - 0.85) / 0.11));
  const easedReveal = reducedMotion ? 1 : 1 - Math.pow(1 - revealProgress, 3);
  
  const opacity = easedReveal;
  const scale = 0.94 + 0.06 * easedReveal;

  // Plaque dimensions - 10-20% of wall width
  const plaqueWidth = compact ? 1.15 : 1.55;
  const plaqueHeight = compact ? 1.15 : 1.55;
  const img = texture?.image as { width?: number; height?: number } | undefined;
  const logoAspect = img?.width && img?.height ? img.width / img.height : 0.5625;
  
  // Calculate logo plane height/width to preserve asset aspect ratio
  const logoDisplayWidth = plaqueWidth * 0.78;
  const logoDisplayHeight = logoDisplayWidth / (logoAspect || 1);


  if (opacity <= 0.001) return null;

  return (
    <group position={[0, 0.02, 0.17]} scale={[scale, scale, scale]}>
      {/* Physical Architectural Backplate / Plaque */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[plaqueWidth, plaqueHeight, 0.04]} />
        <meshStandardMaterial
          color="#1e1916"
          roughness={0.72}
          metalness={0.25}
          transparent={true}
          opacity={opacity * 0.95}
        />
      </mesh>

      {/* Outer Metallic Frame Trim */}
      <mesh position={[0, 0, 0.005]}>
        <boxGeometry args={[plaqueWidth + 0.04, plaqueHeight + 0.04, 0.02]} />
        <meshStandardMaterial
          color="#d9b17a"
          roughness={0.35}
          metalness={0.75}
          transparent={true}
          opacity={opacity * 0.85}
        />
      </mesh>

      {/* Corner Mounting Hardware Pins */}
      {[-1, 1].map((x) =>
        [-1, 1].map((y) => (
          <mesh
            key={`pin-${x}-${y}`}
            position={[
              (x * plaqueWidth) / 2 - x * 0.07,
              (y * plaqueHeight) / 2 - y * 0.07,
              0.022,
            ]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <cylinderGeometry args={[0.022, 0.022, 0.015, 16]} />
            <meshStandardMaterial
              color="#c99f66"
              metalness={0.8}
              roughness={0.3}
              transparent={true}
              opacity={opacity}
            />
          </mesh>
        ))
      )}

      {/* BBC Logo Texture Plane */}
      {texture && (
        <mesh position={[0, 0.08, 0.026]}>
          <planeGeometry args={[logoDisplayWidth, logoDisplayHeight]} />
          <meshStandardMaterial
            map={texture}
            transparent={true}
            opacity={opacity}
            roughness={0.35}
            metalness={0.1}
            alphaTest={0.02}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* Supporting Subtitle Text */}
      <Text
        position={[0, -plaqueHeight / 2 + 0.14, 0.026]}
        fontSize={compact ? 0.052 : 0.062}
        color="#d9b17a"
        letterSpacing={0.12}
        textAlign="center"
        fillOpacity={opacity * 0.9}
      >
        BHARATH BRICKS AND CHAMBERS
      </Text>
    </group>
  );
}
