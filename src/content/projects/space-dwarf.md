---
title: Space Dwarf
description: Solo school project and early exploration of AI and procedural generation in Unity.
excerpt: Game with a priority on procedural content generation and AI.
role: Gameplay programmer
type: school
last_update: 2019-04-20
tags:
  - pcg
  - ai
  - unity
languages:
  - csharp
thumbnail: /assets/images/projects/space_dwarf/space_dwarf.png
github_repo: https://github.com/Surue/SpaceDwarfs
draft: false
---

# Overview

This was my first project combining AI and procedural generation in a game. The pitch was simple: land on a planet as a space dwarf, gather resources, and escape before getting overwhelmed by space goblins.

## Procedural generation

I used procedural generation across multiple steps:

1. generate the level with cellular automata
2. find and remove tiny isolated areas
3. connect regions together
4. create sub-regions for spawning and structure

It was also an opportunity to experiment with ScriptableObjects and stronger systemic thinking in Unity.

The repository is available on [GitHub](https://github.com/Surue/SpaceDwarfs).