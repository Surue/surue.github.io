---
title: Post mortem
description: A retrospective on a six-month school project, focusing on team structure, planning, engine work, and production lessons.
excerpt: Post mortem on this six-month project.
date: 2020-04-08
tags:
  - post-mortem
languages: []
thumbnail: /assets/images/posts/2020-04-08-Post-mortem-how-to-survive-a-6-months-school-project/switch_game.png
draft: false
---

## Recap of the project

If the previous articles focused on the engine itself, it is important to bring the whole project back into scope. At the end of September, three classmates, our teacher, and I started discussing our specialization project. The goal was to spend six months building a game for Nintendo Switch using a custom engine, while each programmer pushed deeper into the area they cared about most.

![Image of the game on the Switch](/assets/images/posts/2020-04-08-Post-mortem-how-to-survive-a-6-months-school-project/switch_game.png)

## Pre-production

Before writing code, we had to handle some basic management tasks:

- choose our roles in the project
- define the game concept
- plan the six months ahead

### The team

#### Basic roles

The initial structure was:

- a lead project who also started as an engine programmer
- a lead design in charge of mechanics and visual direction
- a lead tools programmer and DevOps owner
- a lead programmer and lead engine programmer, which was my role

Over six months the team grew to roughly fifteen developers, especially on the tools side.

![Evolution of the team over 6 months](/assets/images/posts/2020-04-08-Post-mortem-how-to-survive-a-6-months-school-project/programmer_team_evolution.png)

#### Lead programmer

In practice, the lead programmer role covered fairly concrete tasks:

- choosing the working tools
- keeping the schedule aligned with project milestones
- defining the coding style and general programming philosophy
- helping the team stay focused

This represented a small portion of my total workload, but it mattered most at the start of the project when the organization still had to be defined.

#### Lead engine

The lead engine role was the critical one. The architecture of the engine, the tools, and many game-facing systems depended directly on those decisions. It also came with the responsibility of being fast enough to provide a stable foundation for everyone else.

That meant the main priority was simple: keep the engine working at all times, and fix blocking issues immediately when they affected other teams.

### Planning and management

#### Milestones

The project was organized in two-week sprints, with four major phases for the programming teams:

- Pre tool: short period focused on the engine
- Pre game: two months focused on tools
- Game critical: two months for all core gameplay features
- Game plus: final month for extra enhancements

![Milestones](/assets/images/posts/2020-04-08-Post-mortem-how-to-survive-a-6-months-school-project/milestones.png)

#### Code review

Even as students, everyone had different strengths and weaknesses. To make better use of that, we introduced code review on every task. It forced people to read each other's work, understand it, and provide constructive feedback. Some tasks had to be redone multiple times before approval, but the quality bar rose quickly across the team.

![Task flow](/assets/images/posts/2020-04-08-Post-mortem-how-to-survive-a-6-months-school-project/task_steps.JPG)

## Production

Once the project definition and planning were stable, the team split into three main groups:

- Engine: core systems of the POK Engine
- Game: prototype first in Unity, then game implementation in the custom engine
- Tools: the editors and pipelines needed by the rest of the team

### Working at full speed with three different teams

To keep every team productive, systems used by others had to be understandable, stable, and still adaptable. Many core systems were deliberately split into two layers:

- an interface layer exposed early so other developers could work against it
- a hidden implementation layer that could still evolve behind the scenes

![Interface and implementation split](/assets/images/posts/2020-04-08-Post-mortem-how-to-survive-a-6-months-school-project/interface_hidden.JPG)

That structure made it possible to ship unfinished but usable functionality early, then return later for optimization.

### Remote work

During development, the SARS-CoV-2 lockdown forced the whole team into remote work. The quality of everyone's working conditions varied a lot, so we added three recurring meetings every day and stayed connected through a shared voice channel. Some lessons were practical and simple: keep fixed work hours, remain available, and build a routine that separates work from leisure.

### Leading by example

Being both lead programmer and lead engine meant that the code I produced would often be read and copied by others. That made code quality unusually important. A weak decision early on could spread across the whole project and become expensive to undo later.

### Keeping everyone happy

Working in a school project with competing priorities, changing stress levels, and different ambitions led to predictable tension. Some people saw the project mainly as a school exercise, others treated it more like an indie studio opportunity. To reduce conflict, we introduced a few simple changes:

- a daily image, gif, or video of the game to make progress visible
- better separation of tasks depending on personal motivation and involvement
- explicit discussions about what the project was supposed to be

![Daily images on Slack](/assets/images/posts/2020-04-08-Post-mortem-how-to-survive-a-6-months-school-project/slack_images.png)

## After thoughts

### State of the project

At the time of writing, the project was still in progress. The game was playable, the editor was functional, and most of the core mechanics existed, even if a lot of content and rendering work still remained.

### New knowledge acquired

The six months covered several important areas:

- team management and internal workflow design
- custom data structures tailored to concrete engine problems
- architecture decisions for both game and editor workflows
- modern C++ practice in a real long-running project

### Where to go now?

The engine still had plenty of work ahead: maintenance, iteration, optimization, and continued support for the needs of the game team. That was the expected outcome. The project had moved from pure experimentation into something that needed to remain usable.

### Good resources

- Jason Gregory, Game Engine Architecture
- Unity blog for practical references and tooling ideas
- John Sonmez on becoming a lead developer
- The C++ Core Guidelines
- The Google C++ style guide