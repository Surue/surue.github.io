---
title: One week later
description: A follow-up retrospective on the post mortem, focusing on why the original project stalled and what the team learned one week later.
excerpt: A post mortem of a post mortem.
date: 2020-04-29
tags:
  - post-mortem
languages: []
draft: false
---

# One week later

One week after the original post mortem, the situation had changed enough to justify a second look. Instead of focusing on what had been built that week, the article looks at the causes behind the lack of a playable game at that stage.

## Unity to Pok

One major issue was the idea of building the game first in Unity and then transferring it to the custom engine. While the scene transfer worked, the programming paradigms did not line up well. Unity encouraged a component-oriented workflow around individual objects, while the custom engine pushed harder toward ECS-style thinking and data-oriented systems.

Several possible alternatives came out of that reflection:

- use Unity only for level construction
- prototype using DOTS earlier to get closer to the target architecture
- push the tool/editor role of Unity further while keeping runtime execution elsewhere

## Having a better vision of the final product

Another recurring issue was the lack of shared visibility on the actual target product. Features important to the final demo surfaced late, which forced the engine and tools teams to react under pressure instead of planning ahead.

Examples included:

- spatialized audio needs that were broader than necessary
- asset detail levels that were too expensive for camera distance
- missing engine features and tool options needed by the game team

## Having done an engine

The project also suffered from a classic problem: the team did not yet know what building a full game with a custom engine would really entail. Resource handling and production pipeline issues became major bottlenecks precisely because everyone came from tools like Unity and Unreal where those concerns are partially hidden.

That leads to an uncomfortable but useful conclusion: one of the best ways to learn how to build a game with a custom engine is to try and fail at building a game with a custom engine.

## Where is the project heading now?

At that point, the project was still moving forward, but with a reduced cadence. The goal had shifted toward a real vertical slice by the end of August 2020, with the following priorities:

- bring the engine and features to final quality
- make the editor capable of building the whole game without Unity
- dedicate the last stretch to level production and debugging