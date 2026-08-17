"use client";

import dynamic from "next/dynamic";
import { WebGLFallback } from "@/components/three/WebGLFallback";

const BrickMaterialPreview = dynamic(() => import("@/components/three/BrickMaterialPreview"), { ssr: false, loading: () => <WebGLFallback compact /> });

export function ProductPreview({ accent }: { accent: string }) {
  return <div className="h-full min-h-96 overflow-hidden"><BrickMaterialPreview accent={accent} /></div>;
}
