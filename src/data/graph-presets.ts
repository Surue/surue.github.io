import type { GraphEdgeInput, GraphNodeInput, GraphPreset, GraphStep } from "@/data/graph-types";

type CompactNodeType = "circle" | "box";

type CompactNode =
  | [id: string, x: number, y: number]
  | [id: string, x: number, y: number, nodeType: CompactNodeType]
  | [id: string, label: string, x: number, y: number]
  | [id: string, label: string, x: number, y: number, nodeType: CompactNodeType];

type CompactEdgeOptions = {
  id?: string;
  label?: string;
  directed?: boolean;
};

type CompactEdge = [source: string, target: string, options?: CompactEdgeOptions];

type CompactStepOptions = {
  revealNodes?: string[];
  revealEdges?: string[];
  highlightNodes?: string[];
  highlightEdges?: string[];
};

type CompactStep = [label: string, options?: CompactStepOptions];

type DefineGraphPresetInput = {
  title?: string;
  description?: string;
  height?: number;
  showViewportControls?: boolean;
  alwaysHighlightEdges?: string[];
  autoplay?: boolean;
  stepDurationMs?: number;
  nodes: CompactNode[];
  edges: CompactEdge[];
  timeline?: CompactStep[];
};

function toNode(tuple: CompactNode): GraphNodeInput {
  const [id, second, third, fourth, fifth] = tuple;

  if (typeof second === "number") {
    const x = second;
    const y = third as number;
    const nodeType = fourth as CompactNodeType | undefined;
    return { id, x, y, nodeType };
  }

  const label = second;
  const x = third as number;
  const y = fourth as number;
  const nodeType = fifth as CompactNodeType | undefined;
  return { id, label, x, y, nodeType };
}

function toEdge(
  tuple: CompactEdge,
  index: number,
  seenIds: Set<string>,
): GraphEdgeInput {
  const [source, target, options] = tuple;
  const preferredId = options?.id ?? `${source}->${target}`;

  let id = preferredId;
  if (seenIds.has(id)) {
    id = `${preferredId}-${index + 1}`;
  }
  seenIds.add(id);

  return {
    id,
    source,
    target,
    label: options?.label,
    directed: options?.directed,
  };
}

function toStep([label, options]: CompactStep): GraphStep {
  return {
    label,
    revealNodes: options?.revealNodes,
    revealEdges: options?.revealEdges,
    highlightNodes: options?.highlightNodes,
    highlightEdges: options?.highlightEdges,
  };
}

export function defineGraphPreset(input: DefineGraphPresetInput): GraphPreset {
  const usedIds = new Set<string>();

  return {
    title: input.title,
    description: input.description,
    height: input.height,
    showViewportControls: input.showViewportControls,
    alwaysHighlightEdges: input.alwaysHighlightEdges,
    autoplay: input.autoplay,
    stepDurationMs: input.stepDurationMs,
    nodes: input.nodes.map(toNode),
    edges: input.edges.map((edge, index) => toEdge(edge, index, usedIds)),
    timeline: input.timeline?.map(toStep),
  };
}
