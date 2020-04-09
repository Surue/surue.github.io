---
layout: post
title: "Particles System"
date: 2020-04-07 22:21:00 +0100
---

# Particles System
This post focus mainly on the implementation of a particle system adn the optimization coming with it.

## Before working

### Definition
Particle are ligthweighted object that are drawn on the screen with a unique texture on it. In video games they can be found to symbolize impact with objet or explosion. You're seeing blood splashing everywhere when shooting at someone? Those are most certainly particles. If a particle is a simple object with a lifetime and a speed behind it their is a particle system, in charge of spawning particle, retaining information about the numbers of active particle, it can also hold information about how the particles will be instantiated in the world and starting speed. More often you see particle system using particle emitter than contain the shape that will emit particles.

Particles can also be used to simulate fluids or physics phenomena, but for those the texture used is as small as possible and the focus for them is more in the number than in the effect.

### Needs of the game
The game defines how the particles will be used and in Star Of Anarchy they will take two major roles:
- Explosion of any type of objects (spaceships, asteroids, projectils)
- Damage indicator on the player depending of it's health

This mean that there is no complexe behavior with them but the engine must be capable of drawing a lot of them at the same time.

Here is the list of wanted behaviors:
- Displaing sprites
- Changing color of sprites over time
- Dying after a certain amount of time
- Beeing spawn from different type of shape

### Inspirations
As I have never implemented particles before, the following steps was to look at how other engines handle particles. I've mainly been looking at Unity's implementation.

## Implementation

### Basic implementation

### Aligning data

### Lifetime

### Sorting

### Shrink data for gpu

### GPU Instancing

## After thoughts

### Going futher?

### Sources


