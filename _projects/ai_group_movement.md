---
layout: project
title: Group movement and avoidance
role: Programmer
priority: 2
tags: AI unity
thumbnail: first_ai_movement.gif
github: https://github.com/Surue/WarEconomy
type: school-project
highlights: 
- Bachelor project of 4 months
- Implementation of ORCA systems
- 10'000 agents moving at the same time
- 100% Unity Dots
#specific school project
time: 18 weeks for my bachelor project
last_update: 2020-05-29
excerpt: Bachelor project about AI pathfinding and dynamic avoidance of groups.
description: This is my <b>bachelor project</b> where is 4 months I implemented a <b>pathfinding</b> system that could handle large number of agent <b>in a large scale world</b>. The mains systems are a full nav mesh complemented with a waypoint graph to connect every town in the map. Every movement of formation are handle by a mix of full on pathfinding with <b>dynamic obstacle avoidance</b>. The project is made using the new DOTS system from Unity.
---

# Overview
This is my bachelor's project about **pathfinding and group movement**. To sumerize it here are the mains goal of the project:
- Movement of large group of agent while keeping a formation
- Using the new DOTS system of Unity
- Trying to keep it as close a possible from game and not just as a simulation
- Working closly with mentor from the industry
- The priority is the number, not the behavior

| The paper is still beeing written, it will be available here once it's finish |

# Inspirations
![Ashes of the singularity](../assets/images/aiGroupMovement/ashes_of_the_singularity.jpg){: align="right" style="padding-left:16px; width: 250px;"}For this project I took inspiration from classic RTS like Age of Empire or Rise of Nation, but I wanted to bring it to modern technologies. One good example today is Ashes of the Singularity: Escalation which can handle **thousands of agents** using the new game engine: Nitrous Engine. <br clear="right">


![Supreme Commander 2](../assets/images/aiGroupMovement/supreme_commander_2.jpg){:align="left" style="padding-right:16px; width: 250px;"}I also wanted to have structured movement with formation like in Supreme Commanded 2. As this project is focused on having a large number, every formations will be kept simple with **primary shapes**: square, line, column and diamond.<br clear="left">

# Status
The project is still in development, if you want to see the project I sugest you to go have a look at the [repos](https://github.com/Surue/WarEconomy)