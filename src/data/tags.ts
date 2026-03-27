export type TagDefinition = {
    label: string;
    description: string;
    background: string;
    foreground: string;
};

export const tagMap: Record<string, TagDefinition> = {
    ai: {
        label: 'AI',
        description: 'Articles and projects about decision-making systems, pathfinding, and gameplay-oriented artificial intelligence.',
        background: '#e74c3c',
        foreground: '#f9b3ab',
    },
    cpp: {
        label: 'C++',
        description: "Topics and projects built around low-level programming, engine work, rendering, and performance-sensitive systems.",
        background: '#3498db',
        foreground: '#a3d5f7',
    },
    'game-engine': {
        label: 'Game Engine',
        description: 'Custom engine architecture, rendering, multithreading, and runtime systems built outside general-purpose engines.',
        background: '#e67e22',
        foreground: '#f5cba7',
    },
    optimization: {
        label: 'Optimization',
        description: 'Performance work, data-oriented design, and implementation tradeoffs for game runtime systems.',
        background: '#34495e',
        foreground: '#95a5b3',
    },
    'post-mortem': {
        label: 'Post Mortem',
        description: 'Retrospectives on production, teamwork, constraints, and lessons learned from shipped or unfinished projects.',
        background: '#7f8c8d',
        foreground: '#cfd6d6',
    },
    pcg: {
        label: 'PCG',
        description: 'Procedural content generation work spanning levels, worlds, gameplay modifiers, and supporting tools.',
        background: '#9b59b6',
        foreground: '#d7bde2',
    },
    unity: {
        label: 'Unity',
        description: 'Professional and personal work built with Unity, including gameplay systems, tools, liveops support, and production workflows.',
        background: '#2ecc71',
        foreground: '#a6eec3',
    },
    tools: {
        label: 'Tools',
        description: 'Editor extensions, content pipelines, and team-facing tooling designed to speed up production.',
        background: '#1abc9c',
        foreground: '#a2ede0',
    },
};

export const orderedTagSlugs = Object.keys(tagMap);