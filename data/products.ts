export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  applications: string[];
  variants: string[];
  technicalSpecifications: Array<{ label: string; value: string }>;
  related: string[];
  accent: string;
};

export const products: Product[] = [
  {
    slug: "machine-made-bricks",
    name: "Machine-Made Wire-Cut Red Clay Bricks",
    category: "Machine-Made Clay Masonry",
    summary: "Consistent, high-precision wire-cut red clay bricks manufactured in our modern chamber.",
    description: "Our chamber is fully equipped with modern, high-precision machinery, ensuring consistent quality in every wire-cut red clay brick we produce. We offer premium strength, perfect finish, and competitive pricing to meet both small and large project requirements.",
    applications: [
      "Structural Load-Bearing Walls",
      "Architectural Exposed Facades",
      "Boundary & Compound Walls",
      "Residential & Commercial Developments",
    ],
    variants: [
      "Standard Machine-Made Wire-Cut Red Clay Brick",
      "High-Density Structural Red Clay Brick",
      "Custom Project Volume Specifications",
    ],
    technicalSpecifications: [
      { label: "Manufacturing Process", value: "Fully Machine-Made Wire-Cut Extrusion" },
      { label: "Material Sourcing", value: "100% High-Grade Natural Red Clay" },
      { label: "Finish & Edges", value: "High-Precision Smooth Wire-Cut Finish" },
      { label: "Quality & Consistency", value: "Uniform Machine Density & Geometry" },
      { label: "Structural Performance", value: "Premium Compressive Strength for Heavy Loads" },
      { label: "Pricing & Supply", value: "Factory-Direct Competitive Rates for All Project Scales" },
    ],
    related: ["wire-cut-red-clay-bricks"],
    accent: "#a64c31",
  },
  {
    slug: "wire-cut-red-clay-bricks",
    name: "Precision Wire-Cut Red Clay Bricks",
    category: "Architectural Red Clay Bricks",
    summary: "Linear texture, crisp edges, and enduring red clay character for modern architectural elevations.",
    description: "Our chamber is fully equipped with modern, high-precision machinery, ensuring consistent quality in every wire-cut red clay brick we produce. We offer premium strength, perfect finish, and competitive pricing to meet both small and large project requirements.",
    applications: [
      "Exposed Architectural Elevations",
      "Interior Feature & Partition Walls",
      "Landscape Enclosures & Courtyards",
      "Institutional & Civic Buildings",
    ],
    variants: [
      "Standard Red Clay Wire-Cut Finish",
      "Exposed Architectural Grade Wire-Cut Finish",
    ],
    technicalSpecifications: [
      { label: "Production Line", value: "High-Precision Chamber Machinery" },
      { label: "Composition", value: "Natural Red Clay Masonry Units" },
      { label: "Surface Texture", value: "Clean, Crisp Wire-Cut Surface" },
      { label: "Project Capacity", value: "Supplied for Small & Large Construction Volumes" },
    ],
    related: ["machine-made-bricks"],
    accent: "#bd7655",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
