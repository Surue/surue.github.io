---
layout: project
title: Space Infestation
role: Gameplay programmer
tags: pcg unity
languages: csharp
thumbnail: projects/space_infestation/space_infestation.png
type: school
last_update: 2019-09-15
excerpt: Group project where we made a 3D space ship procedural interior proceduraly generated.
description: As an vicious Alien, infest a spaceship to turn it into your new nest, fight robots and get acces to the main generator. I worked with <b>3D procedural generation</b>, meaning all problems going with it (AI navigation, Lights, Collider, optimisation). I also implemented a <b>texture painter</b>, allowing the player to paint a texture on top of a another one.
image_base_url: /assets/images/projects/space_infestation/
---

# Overview
It's a **3D game** using **PCG to generate a space ship** floating into space where the player is an aliens that try to eat everything in its path. This project never came out due to the project being canceled after putting too much pressure on some members of the teams.

# First project in 3D
This was my first game in 3D and proved to be a great challenge. The difficulty was not to work with 3D models but to keep the framerate stable at 60FPS. AS the whole spaceship was generated on the fly we had to come up with some simple optimizations :
- Only rendering the current room and its neighbors
- Limiting realtime lights 
- Working with shader that allows GPU instancing
- Baking some mesh on the fly
