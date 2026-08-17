export type PerformanceTier = "high" | "medium" | "low";

export function detectPerformanceTier(): PerformanceTier {
  if (typeof window === "undefined") return "medium";

  try {
    const concurrency = navigator.hardwareConcurrency || 4;
    const dpr = window.devicePixelRatio || 1;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.innerWidth < 640;

    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return "low";

    const debugInfo = (gl as WebGLRenderingContext).getExtension("WEBGL_debug_renderer_info");
    if (debugInfo) {
      const renderer =
        (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || "";
      if (/swiftshader|llvmpipe|software/i.test(renderer)) {
        return "low";
      }
    }

    if (isMobile) {
      return concurrency >= 8 ? "medium" : "low";
    }

    if (concurrency >= 8 && dpr >= 1.5) return "high";
    if (concurrency >= 4) return "medium";
    return "low";
  } catch {
    return "low";
  }
}
