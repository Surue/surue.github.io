---
title: Group movement and avoidance
description: Bachelor project focused on large-scale pathfinding, formation movement, and dynamic obstacle avoidance in Unity DOTS.
excerpt: Bachelor project about AI pathfinding and dynamic avoidance of groups.
role: Gameplay programmer
type: school
last_update: 2020-05-29
tags:
  - ai
  - unity
languages:
  - csharp
thumbnail: /assets/images/projects/ai_group_movement/first_ai_movement.gif
github: https://github.com/Surue/WarEconomy
draft: false
---

# Overview

This bachelor's project focused on **pathfinding and group movement** at large scale. The core goals were:

- move large groups while keeping formation quality
- work with Unity DOTS
- stay close to gameplay needs rather than pure simulation
- build something production-minded with guidance from industry mentors

The main systems combined a full navmesh with a waypoint graph to connect towns and larger routes. Formation movement mixed full pathfinding with dynamic obstacle avoidance.

## Main takeaways

- large-scale movement depends as much on data layout as on the actual pathfinding algorithm
- formation quality and readability matter as much as raw throughput
- DOTS was useful as a practical way to think differently about structure and scale

The source repository is available on [GitHub](https://github.com/Surue/WarEconomy).