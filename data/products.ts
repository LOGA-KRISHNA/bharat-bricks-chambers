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

const verifiedOnRequest = [
  { label: "Dimensions", value: "Available on request" },
  { label: "Compressive strength", value: "Verified values available on quote" },
  { label: "Water absorption", value: "Verified values available on quote" },
  { label: "Colour / texture", value: "Sample and project review recommended" },
];

export const products: Product[] = [
  {
    slug: "machine-made-bricks", name: "Machine-Made Bricks", category: "Structural masonry",
    summary: "Consistent masonry units for exacting architectural rhythm.",
    description: "A machine-made brick category for project teams seeking repeatable geometry and a considered clay finish. Confirm final suitability with Bharat Bricks for your location and system.",
    applications: ["Facade masonry", "Boundary walls", "Interior feature walls"], variants: ["Project-specific options available on request"], technicalSpecifications: verifiedOnRequest, related: ["wire-cut-bricks", "exposed-bricks"], accent: "#a64c31",
  },
  {
    slug: "wire-cut-bricks", name: "Wire-Cut Bricks", category: "Architectural masonry",
    summary: "Linear texture and a clean, contemporary clay expression.",
    description: "Wire-cut brick solutions that bring a refined, textural read to contemporary facades and walls. Request current samples and verified technical data for the intended installation.",
    applications: ["Architectural facades", "Courtyards", "Screen walls"], variants: ["Project-specific options available on request"], technicalSpecifications: verifiedOnRequest, related: ["machine-made-bricks", "brick-tiles"], accent: "#bd7655",
  },
  {
    slug: "exposed-bricks", name: "Exposed Bricks", category: "Finish masonry",
    summary: "A durable, tactile finish designed to stay visible.",
    description: "Exposed brick materials for architectural surfaces where the join, depth and character of masonry remain part of the design language.",
    applications: ["Feature facades", "Hospitality interiors", "Landscape walls"], variants: ["Project-specific options available on request"], technicalSpecifications: verifiedOnRequest, related: ["wire-cut-bricks", "facade-tiles"], accent: "#7b3525",
  },
  {
    slug: "brick-tiles", name: "Brick Tiles", category: "Cladding",
    summary: "The material warmth of brick in a cladding-ready format.",
    description: "Brick tile options for interior and exterior surface design. Installation system, substrate and project performance criteria should be reviewed with the project team.",
    applications: ["Interior cladding", "Renovation facades", "Retail environments"], variants: ["Project-specific options available on request"], technicalSpecifications: verifiedOnRequest, related: ["facade-tiles", "exposed-bricks"], accent: "#c17c5c",
  },
  {
    slug: "facade-tiles", name: "Facade Tiles", category: "Cladding",
    summary: "Layered surfaces for a composed architectural envelope.",
    description: "Facade tile materials for projects that need a measured, tactile exterior finish. Ask for the latest product suitability, samples and tested system information.",
    applications: ["Ventilated facades", "Commercial elevations", "Entry volumes"], variants: ["Project-specific options available on request"], technicalSpecifications: verifiedOnRequest, related: ["brick-tiles", "machine-made-bricks"], accent: "#926a51",
  },
];

export function getProduct(slug: string) { return products.find((product) => product.slug === slug); }
