---
layout: default
title: Projects
thumbnails:
- projects/project_01.gif
- projects/project_02.png
- projects/project_03.gif
- projects/project_04.png
- projects/project_05.gif
---
<div class="wrapper">
	<div class="container">
		<!-- Relevants Projects -->
		<section>
			<div class="row">
				<div class="col-md-12">
					<h1>Relevants projects</h1>
				</div>
			</div>
			<div class="row">
				{% assign postNames = '' | split: ''%}
				{% assign relevantsProjects = site.projects | sort:'last_update' | reverse %}
				{% for relevantProject in relevantsProjects limit: 3 %}
				{% assign tmpName = relevantProject.title | split: '_' | first | split: '-' %}
				{% assign postNames = postNames | concat: tmpName %}
				<div class="col-sm-12 col-md-4">
					{% include project-card-detailed.html project = relevantProject %}
				</div>
				{% endfor %}
			</div>
		</section>
		<!-- Professional Projects -->
		<section>
			<div class="row">
				<div class="col-md-12">
					<h1>Professional projects</h1>
					<p>During my time at school I had the opportunity to take part in three professionnal project. Each were differents and I learnt differents skills from them.</p>	
				</div>
			</div>
			<div class="row">
				{% assign professionalProjects = site.projects | sort:'last_update' | where:'type', 'pro' | reverse %}
				{% for relevantProject in professionalProjects limit: 3 %}
				<div class="col-sm-12 col-md-4">
					{% include project-card-detailed.html project = relevantProject %}
				</div>
				{% endfor %}
			</div>
		</section>
		<!-- Other Projects -->
		<section>
			<div class="row">
				<div class="col-sm-12 col-md-4">
					<h1>Jam projects</h1>
					<p>I've participated in 15 jams since 2017. Here are some of the most intersesting ones.</p>
					{% assign projectsJams = site.projects | sort:'last_update' | where: 'type', "jam" | reverse %}
					{%- for projectJam in projectsJams -%}
						{% assign found = false %}
						{% for name in postNames %}
							{% if name == projectJam.title %}
								{% assign found = true %}
								{% break %}
							{% endif %}
						{% endfor %}
						{% if found %}
							{% continue %}
						{% endif %}
						{% include project-card-detailed.html project = projectJam %}
					{% endfor %}
				</div>
				<div class="col-sm-12 col-md-4">
					<h1>School projects</h1>
					<p>Most of my school projects are oriented towards AI and PGC as I've always been interested in those areas.</p>
					{% assign projects = site.projects | sort:'last_update' | where: 'type', "school" | reverse %}
					{% for projectSchool in projects %}
						{% assign found = false %}
						{% for name in postNames %}
							{% if name == projectSchool.title %}
								{% assign found = true %}
								{% break %}
							{% endif %}
						{% endfor %}
						{% if found %}
							{% continue %}
						{% endif %}
						{% include project-card-detailed.html project = projectSchool %}
					{% endfor %}
				</div>
				<div class="col-sm-12 col-md-4">
					<h1>Personnal projects</h1>
					{% assign projects = site.projects | sort:'last_update' | where: 'type', "perso" | reverse %}
					{% for projectPerso in projects %}
						{% assign found = false %}
						{% for name in postNames %}
							{% if name == projectPerso.title %}
								{% assign found = true %}
								{% break %}
							{% endif %}
						{% endfor %}
						{% if found %}
							{% continue %}
						{% endif %}
						{% include project-card-detailed.html project = projectPerso %}
					{% endfor %}
				</div>
			</div>
		</section>
	</div>
</div>