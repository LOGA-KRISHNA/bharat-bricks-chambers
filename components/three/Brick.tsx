import { useMemo } from "react";
import * as THREE from "three";

export function Brick({ position, rotation = [0, 0, 0], color = "#a94a2e" }: { position: THREE.Vector3Tuple; rotation?: THREE.EulerTuple; color?: string }) {
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

  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <boxGeometry args={[0.78, 0.28, 0.32]} />
      <meshStandardMaterial
        color={color}
        roughness={0.84}
        metalness={0.02}
        bumpMap={bumpMap || undefined}
        bumpScale={0.012}
      />
    </mesh>
  );
}

