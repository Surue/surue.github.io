---
title: Pok Project
description: Six-month school project to build a custom 3D game engine and ship a game prototype on Nintendo Switch.
excerpt: Specialization project at school where we built a homemade 3D engine in C++ that could run a game on Nintendo Switch.
role: Lead programmer and lead engine
type: school
last_update: 2020-05-10
tags:
  - game-engine
languages:
  - cpp
thumbnail: /assets/images/projects/pok_project/stars_of_anarchy_key_image.JPG
draft: false
---

# Overview

The Pok Project was a six-month school project where we built a **3D game engine** and used it to run a game on **Nintendo Switch**. My two main roles were **Lead Programmer** and **Lead Engine**.

# Result

![Pok scene building](/assets/images/projects/pok_project/pok-building.gif)

The engine and the required tools were successfully built. The game itself remained closer to an early prototype, but the project was still an excellent learning experience.

If you want to understand more of what went wrong at the project level, read the [post mortem](/blog/post-mortem-how-to-survive-a-6-months-school-project/).

I learned a lot during the project, especially in C++ and in the following systems:

- Vulkan and rendering in general
- Space partitioning
- Multithreading
- Physics engine work
- Data-oriented programming and ECS
- Resource management

You can also read the article on the [particle system](/blog/particle-systems/). The multithreading article will be migrated in a later pass.

# Lead Programmer with 15 members

![Project hierarchy](/assets/images/projects/pok_project/prog-hierarchy.png)

My main tasks as lead programmer were:

- managing the team and choosing the working tools
- following the overall schedule decided by the lead project
- choosing an overall coding style and programming philosophy
- keeping everyone focused on the project

The core team had five members:

- Lead Programmer and Lead Engine, my role
- Lead Gameplay Programmer
- Lead Tools and DevOps
- Tool Programmer
- Gameplay Programmer

Later on, underclassmen joined to build tools for both Unity and our custom engine. At that point the project had **15 members**. We used two-week sprints inspired by Agile and managed work through Trello cards.

# Building a custom game engine

![Engine architecture](/assets/images/projects/pok_project/ecs-architecture.png)

As lead engine, I had to:

- design the engine architecture
- manage the engine team
- gather requests from the game and tools teams and translate them into implementation work

For a broader retrospective on those responsibilities, the [post mortem](/blog/post-mortem-how-to-survive-a-6-months-school-project/) remains the best companion article.