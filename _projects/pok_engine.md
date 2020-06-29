---
layout: project
title: Pok Project
role: Lead programmer/engine
team: Up to 15 programmers in 3 teams (Game, Tool, Engine)
priority: 1
tags: game-engine c++
thumbnail: stars_of_anarchy_key_image.JPG
type: school-project
time: 6 months during my third year
last_update: 2020-05-10
highlights: 
- Implementation of a custom engine from scratch
- Decision of the overall architecture 
- Code review for every membre of the team
- Acting as the lead programmer and the lead engine
- Up to 15 programmers at the same time
excerpt: Specialization project at school where we made an home made 3d engine in c++ that could run a game on the Nintendo Switch.
description: This is a <b>6 months school project</b> we made in our third year. The objective was to do a game (Stars of Anarchy) running on the <b>Nintendo Switch</b> using a custom game engine (PokEngine). We separated the team in three main groups, Game, Tool and Engine. I was the <b>lead programmer and engine</b> on the project. I implemented most of the core feature used in the engine as the graphic engine, physics engine, entity manager, resource manager, and so on.
---

# Overview
The Pok's project is a **6 months school project** were me and other students had to make a **3D game engine** that could run on the **Nintendo Switch&trade;**. For this project I had two differents role; **Lead Programmer** and **Lead Engine**.

# Result
![pok Scene Building](../assets/images/pok_project/pok-building.gif){:align="right" style="padding-left:16px; width: 350px;"}
I have mix feelings about the result. The engine and every needed tools have been made. For the game this is another story, the game could be seen as an early prototype. If you want to know more about what went wrong you can read this [post mortem]({% post_url 2020-04-08-Post-mortem-how-to-survive-a-6-months-school-project %}).

But I have learnt a lot throughout the entire project. Mainly in c++ and the following system:
- Vulkan and rendering in general
- Space partitionning 
- Multithreading
- Physics Engine
- Data oriented programming & ECS
- Resources management

You can have an in-depth look at two features. In this [article]({% post_url 2020-04-07-Particle-systems %}) where I go in depth of how I implemented a **particle system**. And in this [one]({% post_url 2020-04-13-How-to-make-more-in-the-same-time %}) I'm speeking about **a simple multithreading system**.<br clear="right">

# Lead Programmer with 15 membres
![pok Scene Building](../assets/images/pok_project/prog-hierarchy.png){:align="left" style="padding-right:50px; width: 350px; margin-bottom: 70px"}
My **main tasks** as the lead programmer were:
- Managing the team and choosing our working tools
- Following the overall schedule decided by the lead project 
- Choosing an overall coding style and philosophy when coding
- Keeping everyone focused on the project

The **core team was made up of 5 members**:
- Lead Programmer / Lead Engine (myself)
- Lead Gameplay programmer 
- Lead Tools / DevOps
- Tool Programmer
- Gameplay Programmer

During the project we were join by our underclassmen who made tools for us both on Unity and our engine. At that time we were **15 membres** working on this project. We took **inspiration from Agile** with **sprints of two weeks** and used **Trello** to store task in form of cards. <br clear="left">

# Making a custome Game Engine
![Architecture Game Engine](../assets/images/pok_project/ecs-architecture.png){:align="right" style="padding-left:16px; width: 350px;"}
As the Lead Engine I had to :
- Design the engine, those decision also influenced the two other teams: Tool and Game
- Managing the engine team
- Taking request from the other team and applied them

If you want to read more about those two roles, you can read this [post mortem]({% post_url 2020-04-08-Post-mortem-how-to-survive-a-6-months-school-project %}) that focus on those roles and how to work in a school project.
