import { useEffect, useMemo, useState, type CSSProperties } from "react";
import ReactFlow, {
  BaseEdge,
  Background,
  Controls,
  EdgeLabelRenderer,
  Handle,
  MarkerType,
  Position,
  type EdgeProps,
  type Edge,
  type Node,
  type NodeProps,
} from "reactflow";
import type { GraphEdgeInput, GraphNodeInput, GraphStep } from "@/data/graph-types";
import "reactflow/dist/style.css";

type GraphDemoProps = {
  title?: string;
  description?: string;
  height?: number;
  showViewportControls?: boolean;
  alwaysHighlightEdges?: string[];
  nodes: GraphNodeInput[];
  edges: GraphEdgeInput[];
  timeline?: GraphStep[];
  autoplay?: boolean;
  stepDurationMs?: number;
};

const DEFAULT_STEP_MS = 1200;

type NodePositionMap = Record<string, { x: number; y: number }>;

type NodeAnchors = Record<string, { sourcePosition: Position; targetPosition: Position }>;

const CIRCLE_NODE_SIZE = 44;
const CIRCLE_BORDER_WIDTH = 2;
const PORT_DOT_RADIUS = 3;
const BOX_NODE_WIDTH = 160;

type CircleEdgeData = {
  sourceIsCircle?: boolean;
  targetIsCircle?: boolean;
  sourceCircleCenterX?: number;
  sourceCircleCenterY?: number;
  targetCircleCenterX?: number;
  targetCircleCenterY?: number;
  sourceCircleRadius?: number;
  targetCircleRadius?: number;
};

function CircleShortestEdge({
  id,
  source,
  target,
  sourceX,
  sourceY,
  targetX,
  targetY,
  markerEnd,
  style,
  label,
  selected,
  data,
}: EdgeProps) {
  const edgeData = (data ?? {}) as CircleEdgeData;
  const sourceIsCircle = edgeData.sourceIsCircle === true;
  const targetIsCircle = edgeData.targetIsCircle === true;

  if (!sourceIsCircle && !targetIsCircle) {
    return null;
  }

  let startX = sourceX;
  let startY = sourceY;
  let endX = targetX;
  let endY = targetY;

  const sourceRadius = edgeData.sourceCircleRadius ?? CIRCLE_NODE_SIZE / 2 - CIRCLE_BORDER_WIDTH / 2;
  const targetRadius = edgeData.targetCircleRadius ?? CIRCLE_NODE_SIZE / 2 - CIRCLE_BORDER_WIDTH / 2;
  const sourceCenterX = edgeData.sourceCircleCenterX;
  const sourceCenterY = edgeData.sourceCircleCenterY;
  const targetCenterX = edgeData.targetCircleCenterX;
  const targetCenterY = edgeData.targetCircleCenterY;

  if (sourceIsCircle && targetIsCircle && sourceCenterX != null && sourceCenterY != null && targetCenterX != null && targetCenterY != null) {
    const dx = targetCenterX - sourceCenterX;
    const dy = targetCenterY - sourceCenterY;
    const distance = Math.hypot(dx, dy);
    if (distance > 0) {
      const unitX = dx / distance;
      const unitY = dy / distance;
      startX = sourceCenterX + unitX * sourceRadius;
      startY = sourceCenterY + unitY * sourceRadius;
      endX = targetCenterX - unitX * targetRadius;
      endY = targetCenterY - unitY * targetRadius;
    }
  } else {
    if (sourceIsCircle && sourceCenterX != null && sourceCenterY != null) {
      const dx = endX - sourceCenterX;
      const dy = endY - sourceCenterY;
      const distance = Math.hypot(dx, dy);
      if (distance > 0) {
        const unitX = dx / distance;
        const unitY = dy / distance;
        startX = sourceCenterX + unitX * sourceRadius;
        startY = sourceCenterY + unitY * sourceRadius;
      }
    }

    if (targetIsCircle && targetCenterX != null && targetCenterY != null) {
      const dx = startX - targetCenterX;
      const dy = startY - targetCenterY;
      const distance = Math.hypot(dx, dy);
      if (distance > 0) {
        const unitX = dx / distance;
        const unitY = dy / distance;
        endX = targetCenterX + unitX * targetRadius;
        endY = targetCenterY + unitY * targetRadius;
      }
    }
  }

  const path = `M ${startX},${startY} L ${endX},${endY}`;
  const labelX = (startX + endX) / 2;
  const labelY = (startY + endY) / 2;

  return (
    <>
      <BaseEdge id={id} path={path} markerEnd={markerEnd} style={style} />
      {sourceIsCircle ? (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${startX}px, ${startY}px)`,
              pointerEvents: "none",
              width: PORT_DOT_RADIUS * 2,
              height: PORT_DOT_RADIUS * 2,
              borderRadius: "50%",
              background: "#0b0f14",
              border: "1px solid rgba(255, 255, 255, 0.28)",
              boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.22)",
              zIndex: 4,
            }}
          />
        </EdgeLabelRenderer>
      ) : null}
      {targetIsCircle ? (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${endX}px, ${endY}px)`,
              pointerEvents: "none",
              width: PORT_DOT_RADIUS * 2,
              height: PORT_DOT_RADIUS * 2,
              borderRadius: "50%",
              background: "#0b0f14",
              border: "1px solid rgba(255, 255, 255, 0.28)",
              boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.22)",
              zIndex: 4,
            }}
          />
        </EdgeLabelRenderer>
      ) : null}
      {label ? (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
              pointerEvents: "none",
              color: "#dceafe",
              fontWeight: 700,
              fontSize: 12,
              background: "rgba(8, 16, 30, 0.84)",
              borderRadius: 6,
              padding: "3px 6px",
              outline: selected ? "1px solid rgba(252, 163, 17, 0.5)" : undefined,
            }}
          >
            {label}
          </div>
        </EdgeLabelRenderer>
      ) : null}
    </>
  );
}

function vectorToPosition(dx: number, dy: number, fallback: Position): Position {
  const horizontalPriority = Math.abs(dx) >= Math.abs(dy);
  if (horizontalPriority) {
    return dx >= 0 ? Position.Right : Position.Left;
  }

  if (dy === 0) {
    return fallback;
  }

  return dy >= 0 ? Position.Bottom : Position.Top;
}

function getClosestSidePosition(source: GraphNodeInput, target: GraphNodeInput): Position {
  return vectorToPosition(target.x - source.x, target.y - source.y, Position.Right);
}

function handleId(position: Position, handleType: "source" | "target"): string {
  return `${position}-${handleType}`;
}

type ActiveHandlePositions = {
  sourcePositions: Position[];
  targetPositions: Position[];
};

function BoxNode({ data }: NodeProps<{ label: string; activeHandlePositions?: ActiveHandlePositions }>) {
  const sourcePositions = new Set(data.activeHandlePositions?.sourcePositions ?? []);
  const targetPositions = new Set(data.activeHandlePositions?.targetPositions ?? []);
  const portStyle = {
    width: 8,
    height: 8,
    borderRadius: 999,
    background: "#0b0f14",
    border: "1px solid rgba(255, 255, 255, 0.28)",
    boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.22)",
  } as const;

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      {sourcePositions.has(Position.Top) ? (
        <Handle type="source" position={Position.Top} id={handleId(Position.Top, "source")} style={portStyle} isConnectable={false} />
      ) : null}
      {targetPositions.has(Position.Top) ? (
        <Handle type="target" position={Position.Top} id={handleId(Position.Top, "target")} style={portStyle} isConnectable={false} />
      ) : null}

      {sourcePositions.has(Position.Right) ? (
        <Handle type="source" position={Position.Right} id={handleId(Position.Right, "source")} style={portStyle} isConnectable={false} />
      ) : null}
      {targetPositions.has(Position.Right) ? (
        <Handle type="target" position={Position.Right} id={handleId(Position.Right, "target")} style={portStyle} isConnectable={false} />
      ) : null}

      {sourcePositions.has(Position.Bottom) ? (
        <Handle type="source" position={Position.Bottom} id={handleId(Position.Bottom, "source")} style={portStyle} isConnectable={false} />
      ) : null}
      {targetPositions.has(Position.Bottom) ? (
        <Handle type="target" position={Position.Bottom} id={handleId(Position.Bottom, "target")} style={portStyle} isConnectable={false} />
      ) : null}

      {sourcePositions.has(Position.Left) ? (
        <Handle type="source" position={Position.Left} id={handleId(Position.Left, "source")} style={portStyle} isConnectable={false} />
      ) : null}
      {targetPositions.has(Position.Left) ? (
        <Handle type="target" position={Position.Left} id={handleId(Position.Left, "target")} style={portStyle} isConnectable={false} />
      ) : null}

      <div style={{ pointerEvents: "none", textAlign: "center", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "8px" }}>
        {data.label}
      </div>
    </div>
  );
}

function inferNodeAnchors(nodes: GraphNodeInput[], edges: GraphEdgeInput[]): NodeAnchors {
  const positions: NodePositionMap = Object.fromEntries(nodes.map((node) => [node.id, { x: node.x, y: node.y }]));

  const outgoing = new Map<string, { dx: number; dy: number; count: number }>();
  const incoming = new Map<string, { dx: number; dy: number; count: number }>();

  for (const edge of edges) {
    const source = positions[edge.source];
    const target = positions[edge.target];
    if (!source || !target) {
      continue;
    }

    const sourceToTargetDx = target.x - source.x;
    const sourceToTargetDy = target.y - source.y;

    const outValue = outgoing.get(edge.source) ?? { dx: 0, dy: 0, count: 0 };
    outgoing.set(edge.source, {
      dx: outValue.dx + sourceToTargetDx,
      dy: outValue.dy + sourceToTargetDy,
      count: outValue.count + 1,
    });

    const targetToSourceDx = source.x - target.x;
    const targetToSourceDy = source.y - target.y;
    const inValue = incoming.get(edge.target) ?? { dx: 0, dy: 0, count: 0 };
    incoming.set(edge.target, {
      dx: inValue.dx + targetToSourceDx,
      dy: inValue.dy + targetToSourceDy,
      count: inValue.count + 1,
    });
  }

  const anchors: NodeAnchors = {};
  for (const node of nodes) {
    const out = outgoing.get(node.id);
    const inn = incoming.get(node.id);

    anchors[node.id] = {
      sourcePosition: out
        ? vectorToPosition(out.dx / out.count, out.dy / out.count, Position.Right)
        : Position.Right,
      targetPosition: inn
        ? vectorToPosition(inn.dx / inn.count, inn.dy / inn.count, Position.Left)
        : Position.Left,
    };
  }

  return anchors;
}

function mergeSetIds(steps: GraphStep[], key: "revealNodes" | "revealEdges", endStep: number): Set<string> {
  const result = new Set<string>();

  for (let i = 0; i <= endStep; i += 1) {
    const values = steps[i]?.[key] ?? [];
    for (const value of values) {
      result.add(value);
    }
  }

  return result;
}

function isCircleNode(node: GraphNodeInput): boolean {
  if (node.nodeType === "circle") {
    return true;
  }
  if (node.nodeType === "box") {
    return false;
  }

  const hasLabel = typeof node.label === "string" && node.label.trim().length > 0;
  return !hasLabel;
}

export default function GraphDemo({
  title,
  description,
  height = 360,
  showViewportControls = true,
  alwaysHighlightEdges = [],
  nodes,
  edges,
  timeline = [],
  autoplay = true,
  stepDurationMs = DEFAULT_STEP_MS,
}: GraphDemoProps) {
  const edgeTypes = useMemo(() => ({ circleShortest: CircleShortestEdge }), []);
  const hasTimeline = timeline.length > 0;
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay && hasTimeline);

  useEffect(() => {
    setCurrentStep(0);
    setIsPlaying(autoplay && hasTimeline);
  }, [autoplay, hasTimeline, nodes, edges, timeline]);

  useEffect(() => {
    if (!hasTimeline || !isPlaying) {
      return;
    }

    const maxStep = Math.max(0, timeline.length - 1);
    if (currentStep >= maxStep) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCurrentStep((step) => Math.min(step + 1, maxStep));
    }, stepDurationMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [currentStep, hasTimeline, isPlaying, stepDurationMs, timeline.length]);

  const visibleNodes = useMemo(() => {
    if (!hasTimeline) {
      return new Set(nodes.map((node) => node.id));
    }

    return mergeSetIds(timeline, "revealNodes", currentStep);
  }, [currentStep, hasTimeline, nodes, timeline]);

  const visibleEdges = useMemo(() => {
    if (!hasTimeline) {
      return new Set(edges.map((edge) => edge.id));
    }

    return mergeSetIds(timeline, "revealEdges", currentStep);
  }, [currentStep, edges, hasTimeline, timeline]);

  const highlightNodes = useMemo(
    () => new Set(hasTimeline ? timeline[currentStep]?.highlightNodes ?? [] : []),
    [currentStep, hasTimeline, timeline],
  );

  const highlightEdges = useMemo(
    () => {
      const ids = new Set(alwaysHighlightEdges);
      if (hasTimeline) {
        for (const edgeId of timeline[currentStep]?.highlightEdges ?? []) {
          ids.add(edgeId);
        }
      }

      return ids;
    },
    [alwaysHighlightEdges, currentStep, hasTimeline, timeline],
  );

  const activeHandleMap = useMemo(() => {
    const nodeMap = new Map(nodes.map((node) => [node.id, node]));
    const result = new Map<string, { sourcePositions: Set<Position>; targetPositions: Set<Position> }>();

    for (const node of nodes) {
      result.set(node.id, { sourcePositions: new Set(), targetPositions: new Set() });
    }

    for (const edge of edges) {
      const sourceNode = nodeMap.get(edge.source);
      const targetNode = nodeMap.get(edge.target);
      if (!sourceNode || !targetNode) {
        continue;
      }

      if (!isCircleNode(sourceNode)) {
        result.get(sourceNode.id)?.sourcePositions.add(getClosestSidePosition(sourceNode, targetNode));
      }

      if (!isCircleNode(targetNode)) {
        result.get(targetNode.id)?.targetPositions.add(getClosestSidePosition(targetNode, sourceNode));
      }
    }

    return result;
  }, [edges, nodes]);

  const nodeTypes = useMemo(() => ({ boxNode: BoxNode }), []);

  const flowNodes = useMemo<Node[]>(() => {
    const anchors = inferNodeAnchors(nodes, edges);

    return nodes.map((node) => {
      const isVisible = visibleNodes.has(node.id);
      const isHighlighted = highlightNodes.has(node.id);
      const circleNode = isCircleNode(node);
      const activeHandles = activeHandleMap.get(node.id);

      return {
        id: node.id,
        type: circleNode ? undefined : "boxNode",
        className: circleNode ? "graph-node--circle" : undefined,
        data: {
          label: node.label ?? "",
          activeHandlePositions: activeHandles
            ? {
                sourcePositions: Array.from(activeHandles.sourcePositions),
                targetPositions: Array.from(activeHandles.targetPositions),
              }
            : undefined,
        },
        position: { x: node.x, y: node.y },
        sourcePosition: anchors[node.id]?.sourcePosition ?? Position.Right,
        targetPosition: anchors[node.id]?.targetPosition ?? Position.Left,
        style: {
          borderRadius: circleNode ? "50%" : 14,
          border: `2px solid ${isHighlighted ? "#fca311" : "#6ea8fe"}`,
          background: isHighlighted ? "rgba(252, 163, 17, 0.18)" : "rgba(30, 50, 78, 0.9)",
          color: "#eef6ff",
          fontWeight: 700,
          boxShadow: isHighlighted
            ? "0 0 0 3px rgba(252, 163, 17, 0.25)"
            : "0 6px 20px rgba(0, 0, 0, 0.22)",
          opacity: isVisible ? 1 : 0.18,
          transition: "all 280ms ease",
          ...(circleNode ? { width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" } : { width: BOX_NODE_WIDTH }),
          ...(circleNode ? { boxSizing: "border-box" } : {}),
        },
        draggable: false,
        selectable: false,
      } satisfies Node;
    });
  }, [edges, highlightNodes, nodes, visibleNodes]);

  const flowEdges = useMemo<Edge[]>(() => {
    const nodeMap = new Map(nodes.map((node) => [node.id, node]));

    return edges.map((edge) => {
      const isVisible = visibleEdges.has(edge.id);
      const isHighlighted = highlightEdges.has(edge.id);
      const directed = edge.directed ?? true;

      const sourceNode = nodeMap.get(edge.source);
      const targetNode = nodeMap.get(edge.target);
      const sourceIsCircle = sourceNode ? isCircleNode(sourceNode) : false;
      const targetIsCircle = targetNode ? isCircleNode(targetNode) : false;
      const usesCircleShortest = sourceIsCircle || targetIsCircle;
      const circleRadius = CIRCLE_NODE_SIZE / 2 - CIRCLE_BORDER_WIDTH / 2;

      const sourceHandle = sourceNode && targetNode && !sourceIsCircle ? handleId(getClosestSidePosition(sourceNode, targetNode), "source") : undefined;
      const targetHandle = targetNode && sourceNode && !targetIsCircle ? handleId(getClosestSidePosition(targetNode, sourceNode), "target") : undefined;

      return {
        id: edge.id,
        source: edge.source,
        target: edge.target,
        sourceHandle,
        targetHandle,
        type: usesCircleShortest ? "circleShortest" : "smoothstep",
        data: usesCircleShortest
          ? {
              sourceIsCircle,
              targetIsCircle,
              sourceCircleCenterX: sourceIsCircle && sourceNode ? sourceNode.x + CIRCLE_NODE_SIZE / 2 : undefined,
              sourceCircleCenterY: sourceIsCircle && sourceNode ? sourceNode.y + CIRCLE_NODE_SIZE / 2 : undefined,
              targetCircleCenterX: targetIsCircle && targetNode ? targetNode.x + CIRCLE_NODE_SIZE / 2 : undefined,
              targetCircleCenterY: targetIsCircle && targetNode ? targetNode.y + CIRCLE_NODE_SIZE / 2 : undefined,
              sourceCircleRadius: sourceIsCircle ? circleRadius : undefined,
              targetCircleRadius: targetIsCircle ? circleRadius : undefined,
            }
          : undefined,
        label: edge.label,
        animated: isHighlighted,
        markerEnd: directed ? { type: MarkerType.ArrowClosed, width: 22, height: 22 } : undefined,
        style: {
          stroke: isHighlighted ? "#fca311" : "#99b8ff",
          strokeWidth: isHighlighted ? 3.2 : 2,
          opacity: isVisible ? 1 : 0.15,
          transition: "all 280ms ease",
        },
        labelStyle: {
          fill: "#dceafe",
          fontWeight: 700,
          fontSize: 12,
        },
        labelBgStyle: {
          fill: "rgba(8, 16, 30, 0.84)",
          fillOpacity: 1,
        },
        labelBgPadding: [6, 3],
        labelBgBorderRadius: 6,
      } satisfies Edge;
    });
  }, [edges, highlightEdges, nodes, visibleEdges]);

  const stepLabel = hasTimeline ? timeline[currentStep]?.label : undefined;

  return (
    <figure className="graph-demo" style={{ "--graph-height": `${height}px` } as CSSProperties}>
      {(title || description) && (
        <figcaption className="graph-demo__caption">
          {title ? <strong>{title}</strong> : null}
          {description ? <span>{description}</span> : null}
        </figcaption>
      )}

      <div className="graph-demo__canvas" role="img" aria-label={title ?? "Graph visualization"}>
        <ReactFlow
          nodes={flowNodes}
          edges={flowEdges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          minZoom={0.65}
          maxZoom={1.3}
          panOnDrag={showViewportControls}
          panOnScroll={showViewportControls}
          zoomOnScroll={showViewportControls}
          zoomOnPinch={showViewportControls}
          zoomOnDoubleClick={showViewportControls}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="rgba(168, 191, 233, 0.3)" gap={18} size={1} />
          {showViewportControls ? <Controls showInteractive={false} /> : null}
        </ReactFlow>
      </div>

      {hasTimeline && (
        <div className="graph-demo__controls" aria-label="Animation controls">
          <button type="button" onClick={() => setCurrentStep((step) => Math.max(step - 1, 0))}>
            Prev
          </button>
          <button type="button" onClick={() => setIsPlaying((playing) => !playing)}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={() => setCurrentStep((step) => Math.min(step + 1, timeline.length - 1))}
          >
            Next
          </button>
          <button
            type="button"
            onClick={() => {
              setCurrentStep(0);
              setIsPlaying(autoplay);
            }}
          >
            Reset
          </button>
          <p>
            Step {currentStep + 1}/{timeline.length}
            {stepLabel ? ` - ${stepLabel}` : ""}
          </p>
        </div>
      )}
    </figure>
  );
}
