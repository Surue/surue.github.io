---
title: AI in an ECS environment
description: Early notes about optimizing AI decision-making and pathfinding in a city-builder style simulation.
excerpt: Optimization of pathfinding and behavior trees.
date: 2020-04-18
updated: 2020-04-18
tags:
  - ai
languages:
  - cpp
thumbnail: /assets/images/projects/nastrond/nastrond.gif
type: article
level: advanced
featured: false
draft: true
---

# AI in an ECS environment

This article is still incomplete in the original site, so it is migrated as a draft for now.

It is tied to the Nastrond project and focuses on two main areas:

- decision-making with a shared behavior tree
- pathfinding optimized for many agents in the same city simulation

The core claim of the article is that the project went from struggling with hundreds of agents to supporting around 10,000 agents making decisions and moving through the world in less than 5 ms per frame.
