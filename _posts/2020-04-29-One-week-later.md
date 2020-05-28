---
layout: post
title: "One week later"
date: 2020-04-29 22:21:00 +0100
excerpt: A post mortem of a post mortem
tags: post-mortem
---

# One week later

One week has passed since [this post]({% post_url 2020-04-08-Post-mortem-how-to-survive-a-6-months-school-project %}) and a lot of things happened the last week. To sum it up, there was no game. Instead of looking at what I’ve been working the past week I’ll be looking at what led to this situation.


## Unity to Pok

The first major problem was our idea to build the game on Unity then transfer it to our custom engine. If the system is working and a scene built on Unity can be imported in Pok the problem is the paradigm use in both engines.

In Unity you have this component approach where you build objects with different components. You have a complex hierarchy of objects and monobehaviour works on a unique object most of the time (designer in our project was not using DOTS).

The problem came when the game programmers came to work with Polk, because every system, the script had to be rethought. We were using hard ECS, where each system works on component, but every entity were treated only looking at their components and not the entire object. 
 
We had some discussion about this issue and some solutions that came up

*   Using Unity only to build the level and nothing else. It would also have led every gameplay programmer to work earlier on the engine and to imagine their system in a data oriented way.
*   Using DOTS right from the start on Unity you at least simulate an ECS approach on Unity. Once again the goal is to have the system on the prototype and the scene built in an ECS way.
*   We also had the chance to meet Alexandre Mutel (Technical Lead at Unity) who proposed to push the idea of Unity further and to use Unity only as the editor, but having it running on the Pok via internet as they are doing with live links.


## Having a better vision of the final product

To resume this point there is a good example, one month and a half before the deadline, during a reunion project with every lead and our teacher acting as our stakeholder, the lead designer talk about the trails that were following every projectiles. The problem was that no one was aware of this feature and in the demo there weren’t any trails.  
 
The engine team had to create a new pipeline just to render those new objects, with the creation of systems and components to interact with them. The art team never had the time to prepare texture specific for trails. 


This problem came up a lot during the project, as the priority was to have a working version of our custom engine the demo was left aside. Doing so was a mistake that causes problem to every other team :

*   Sounds were spatialized where for example a moving object had a sound that was moving, instead of only having a unique sound.
*   3D meshes had to much detail when they were far from the camera. The player was one of the most detailed object, but it was quite far from the camera.
*   The engine was missing a lot of features that the game needed and tools had a missing option on components to test the game efficiently.


## Having done a engine

Finally, none of us had a clear view of the full project. We didn’t have an idea of everything that needed to be done and things that were seen as an easy turn out to be some of the most difficult parts to implement.  
 
Pretty much everything related to resources is still today a choking point in the engine and in the whole production pipeline and we couldn’t imagine having those issues because everyone of us had only been working with Unity or the Unreal Engine where problems related to resource doesn’t exist, or at least are hidden from us. 
 
So the solutions to our failure when making a game with a custom game engine is to make a game with a custom game engine. Yes, it can be seen as a vicious circle, but one of the best ways to learn something is also making errors.


## Where is the project is heading for now?

The  project is still on its rail and is not stopping. For the moment we work on the project only one day a week and the objective is to have a true vertical slice for the end of august 2020. It gives us roughly four months to finish the project.

The three first months have the objective to have the final quality of every feature and for the graphics engine. The editor must also be able to build the entire game, cutting completely Unity from our production pipeline.

The last month, every member of the team will be working on the final level, some working on debugging the game while the others are building the level. 
 
Hope to see you again!
