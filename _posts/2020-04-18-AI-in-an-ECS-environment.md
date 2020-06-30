---
layout: post
title: "AI in an ECS environnement"
date: 2020-04-18 22:21:00 +0100
thumbnail: ai_in_an_ecs_environment/initial_state.gif
excerpt: Optimization of pathfinding and behavior tree.
description: This project show how an AI decision-making system and the patfinding algorithms has been optimized to go from a non playable with hundreds of agents to as game which can support 10'000 agents making decisions and moving inside a city.
tags: AI c++
---

# Project recap
This article is link to this [project](../../../projects/nastrond.html). Nàstrond is a school project where we made a **2D dwarf city builder** using a **custom c++ engine** made by our teacher. We add 3 months to finish this project and the team was setup as the following:
- One lead project (me)
- One lead art + one other artist
- One lead programmer with 6 programmers (including me)
- One designers

In this project I had two main task:
- Decision making, every dwarf had their own mind and were capable of taking their own decision. I used a **behavior tree** that every dwarf was sharing.
- Pathfinding, there was resource that needed to be transported from production building to transformation building, there was house to sleep in, etc. I implemented an **A* pathfinding** with a priority heuristic to move on roads.

In this article I'll take an in-depth look on the various optimization I've made, and how I went from a game that couldn't handle 1'000 agents simultanously with a game that could have **10'000 agents** at the same time taking **less than 5ms each frame**.

[DRAFT]
