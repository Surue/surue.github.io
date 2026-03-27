---
title: Space Infestation
description: School project about generating a 3D spaceship interior and solving the runtime issues that come with it.
excerpt: Group project where we built a procedurally generated 3D spaceship interior.
role: Gameplay programmer
type: school
last_update: 2019-09-15
tags:
  - pcg
  - unity
languages:
  - csharp
thumbnail: /assets/images/projects/space_infestation/space_infestation.png
draft: false
---

# Overview

Space Infestation was a 3D game where the player controls an alien trying to infest a procedurally generated spaceship. The project was ultimately cancelled, but it was a strong technical exercise in runtime generation and performance constraints.

## Main challenges

- runtime generation of a spaceship interior
- AI navigation across generated spaces
- lights, colliders, and rendering cost in 3D
- a texture painter allowing the player to paint on top of existing materials

## First project in 3D

This was my first full project in 3D, and the hardest part was not the models themselves but holding a stable 60 FPS budget while generating and rendering large spaces.