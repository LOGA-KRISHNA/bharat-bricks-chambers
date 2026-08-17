import { Brick } from "./Brick";

export function BrickWall({ rows = 5, columns = 7, color = "#a94a2e" }: { rows?: number; columns?: number; color?: string }) {
  return <group>{Array.from({ length: rows * columns }).map((_, index) => {
    const row = Math.floor(index / columns); const column = index % columns;
    return <Brick key={index} color={color} position={[(column - (columns - 1) / 2) * 0.8 + (row % 2 ? 0.4 : 0), (row - (rows - 1) / 2) * 0.3, 0]} />;
  })}</group>;
}
