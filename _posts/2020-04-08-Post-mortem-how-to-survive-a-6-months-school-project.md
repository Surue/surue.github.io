---
layout: post
title: "Post morter"
date: 2020-04-08 22:21:00 +0100
---

# Recap of the project

If throughout all those posts I've been mostly speaking about the engine itself, it's important to replace it into the scope of the full project. At the end of September 3 of my comrades, our teacher and myself started talking about our specialization project. To sum it up it must be a 6 month project where everyone of us had the opportunity to go further it its favorite programming domains while doing a game with a custom engine.


## Pre - production

Even thought we were all eager to start programming as soon as possible, we had to do some basic management tasks in the project to set up everything properly. 

- Choose our job on the project

- Come up with an idea for the game

- Plan the whole project over the six next months


### The team


#### Basics roles

The first task was to take every available roles and to start working with it. We had :

- A lead project that is also an engine programme. He then became latter a game programmer.

- A lead design, in charge of designing the game from the mechanics to the visual look of it. He is also a gameplay programmer

- A lead tool programmer/devops, working on tools and maintaining our repository

- A lead programmer who is also the lead engine programer (me)

Through the course of the three months the team changed a lot and the number keep increasing up to fifteen developers in total, mainly in the tool team. As I'm writing those line the team is counting three more members, two gameplay programmers and a tool programmer bringing up the total of developer to eight.

||

| SCHEMA ÉVOLUTION NOMBRE DE PERSONNE DANS LES EQUIPES TOUT LES 2 SEMAINES |

||


#### Lead Programmer

If the title _Lead Programmer_ sounds big and powerful in practice it was simpler tasks:

- Managing the team and choosing our working tools

- Following the overall schedule decided by the lead project 

- Choose an overall coding style and philosophy of coding

- Keep everyone being focused on the project

In the end this role took around 10% of my overall work and it was the most time-consuming at the start of the project while deciding how to structure the work and the organization. Later in the project, it was more a role of following everyone and taking decision to cut some features to prioritize another.


#### Lead Engine

The seconds role was the real one. Being the _Lead Engine_ meant that the  whole architecture of every system, every tool, every object would depend directly on how the implementation would be made. It also had an hidden task, to be fast enough to deliver something that could be used to make tool and a game without making anyone lose time. 

It was my main role during the whole project and the most stressing one because is something went wrong with it, it would trouble the rest of the team. It means that the absolute priority was to make sure the engine was working at anytime and if a bug/error was found by someone it had to be fixed as soon as possible. 


### Planning & Management

The whole project used sprints of two weeks inspired by agile method and for the prog' team was devised if four main steps

- Pre tool : A short periode where to main focus was on the engine

- Pre game : 2 months where the focus was on tools

- Game Critical : 2 months where every core feature needed to be implemented in the engine

- Game Plus : The final month allocated to do some enhancement on the game.

||

| SCHEMA AVEC LES 4 ETAPES LIÉES AUX TÂCHES |

||


### The game

It was important for us to have the basics idea of the game because this would shape the engine and every tool needed. It would also design the allocation of every human's resource we had. Star Of Anarchy is a 3D rail shooter set up is space that is playable on the Switch. 

||

| IMAGE DU JEU |

||


## Production 


### Working at full speed with three differents teams

To be the most efficient during the 6 months we had, every team must be able to work on something without having to redo later. It means that on an implementation point of view, everything that are used by someone else had to be easy to understand and can still be modified by the author later without causing trouble to users. \
 \
A lot of core systems have two layers:



*   The visible one that we called “the interface part”. This part was created as soon as possible because those functions are possibly used by anyone on the team. 
*   The hidden one which is all the codes behind the function that user don’t need. 

This separation allowed us to have working but not optimized code and to later come back on some part and do the needed optimization. In some case it allowed to deploy version of the engine with functioning interface but no code behind, doing so made that no one was waiting on the code and could already implement the logic in their system without it working. 


### Remote works

As I’m writing those line, our team is in full isolation due to the Covid-19, a coronavirus that strike during the development of the project. It involved to find solution to works from home and we’re not all equal while facing this situation.  \
 \
Some live with their families, other have difficulties to stay concentrate while being in the same seat where they usually play. To fight all those probleme we decided to implement three daily meetings, 9am, 1pm and 5pm. We also all stay on a vocal channel and are constantly available for the other.  \
 \
Some lesson that we learnt was to have fixed hours of work, stay connected to each other, take a shower and put on some pants. It can look silly at first, but it’s important to create a new routine where we used to have a whole different one. 


### Leading by the example

There is differents style of team leading, but being both the lead programmer and lead engine the code produced as those roles had to be on a top notch level because it would be look and copy be everyone else. It means that every bad practice would be automatically reproduced and would take time to get rid of. 

The biggest problem was that in the course of 6 months only working with the same language, c++ in this case, the level of any one would rapidly increase. It meant that something that was _okish_ at the start of the project was a big _no no_ at the end. It grew frustration in some people that had done something at the start of the project and that couldn't to it anymore at the end. Still it was amazing to see the level of everyone increasing at a very fast pace.


### Keeping everyone happy

Working in a school project, with other project at the same time, other priorities, not having the same point of view on the scope of the project, stress from milestone led to some tensions inside the group.

All seams to come from one in particular, the vision we had for the project. Some of us wanted to keep this as a school project, without the intention to selling the game at the end and for them we were simulating a professional environment. For the other part we’re an indie studio making a game with the chance to do it in the school setting who to roles seriously and did go further than simply working from monday to friday. It led to some clashes between members. \
 \
To lower the number of clashes we introduce in the programmer team :

- Daily image, gif or video of the game. This was to help everyone seeing where we are

- A better separation of tasks depending on who wanted to go further with the project

- Discussion with the whole team to settle things down on what we want the project to be

As today not everything is cleared up, but we all agree to at least use this project as a showroom of our capabilities.


## After Thoughts


### State of the project

At the time where this post is published the project is still in work in progress. The game is playable and can be edited via the editor. The state of the project could be considered as a prototype of what will be the final project.  \
 \
For the game all main mechanics are implemented and can be tested. Some work still need to be done regarding the content and how to diversify the use of the cores mechanics. For the editor every tool to build the game are done and every aspect of the game can be modified from it. The engine can work with up to 10’000 entities without suffering major framerate problems. 


### New knowledge acquired

As said earlier, working six months on a project this size, with all those part coming together with a team this big represents a fair amount of knowledge.  They cover differents area:



*   Team management
*   Data structure
*   Application structure
*   Programming in generals


### Where to go now?

Programmer are never satisfied with their work, there is still work to do, new features to implement, optimize some systems. For now the engine will stay alive the six next months, it will be maintain and updated. The goal is to keep it workable, follow demands from the game team and make sure that the game is playable in the best condition possible.
