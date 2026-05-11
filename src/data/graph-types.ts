export type GraphNodeInput = {
  id: string;
  label?: string;
  x: number;
  y: number;
  nodeType?: "circle" | "box";
};

export type GraphEdgeInput = {
  id: string;
  source: string;
  target: string;
  label?: string;
  directed?: boolean;
};

export type GraphStep = {
  label?: string;
  revealNodes?: string[];
  revealEdges?: string[];
  highlightNodes?: string[];
  highlightEdges?: string[];
};

export type GraphPreset = {
  title?: string;
  description?: string;
  height?: number;
  showViewportControls?: boolean;
  alwaysHighlightEdges?: string[];
  autoplay?: boolean;
  stepDurationMs?: number;
  nodes: GraphNodeInput[];
  edges: GraphEdgeInput[];
  timeline?: GraphStep[];
};
