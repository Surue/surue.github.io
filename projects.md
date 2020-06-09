---
layout: default
title: Projects
---
<div class="container">
	<h1>Relevants projects</h1>
	<div class="row">
		{% assign postNames = '' | split: ''%}
		{% assign relevantsProjects = site.projects | sort:'priority' %}
		{% for relevantProject in relevantsProjects limit: 3 %}
		{% assign tmpName = relevantProject.title | split: '_' | first | split: '-' %}
		{% assign postNames = postNames | concat: tmpName %}
		<div class="col-sm-12 col-md-4">
			<div class="post-card">
				{% if relevantProject.thumbnail %}
				<img src="/assets/images/{{ relevantProject.thumbnail }}">
				{% else %}
				<img src="/assets/images/missing-image-placeholder.jpg">
				{% endif %}
				<div class="post-card-content">
					<h4>{{ relevantProject.title | escape }}</h4>
					<p class="post-meta">
						{% for tag in relevantProject.tags %}
						{% capture tag_name %}{{ tag }}{% endcapture %}
						<a href="/tag/{{ tag_name }}"><code><span style="white-space: nowrap">{{ tag_name }}</span></code></a>&nbsp;
						{% endfor %} <br/>
					</p>
					<p>
						{{ relevantProject.description }}
					</p>
					{% if relevantProject.highlights %}
					<h3>Highlights:</h3>
					<ul>
						{% for hl in relevantProject.highlights %}
						<li>{{ hl }}</li>
						{% endfor %}
					</ul>
					{% endif %}
					<div class="has-text-centered">
						<a class="read-more-button" href="{{ post.url | relative_url }}">Read More</a>
					</div>
				</div>
			</div>
		</div>
		{% endfor %}
	</div>
	<h1>Professional projects</h1>
	<div class="row">
		{% assign postNames = '' | split: ''%}
		{% assign professionalProjects = site.projects | where:'type', 'professional' %}
		{% for relevantProject in professionalProjects limit: 3 %}
		{% assign tmpName = relevantProject.title | split: '_' | first | split: '-' %}
		{% assign postNames = postNames | concat: tmpName %}
		<div class="col-sm-12 col-md-4">
			<div class="post-card">
				{% if relevantProject.thumbnail %}
				<img src="/assets/images/{{ relevantProject.thumbnail }}">
				{% else %}
				<img src="/assets/images/missing-image-placeholder.jpg">
				{% endif %}
				<div class="post-card-content">
					<h4>{{ relevantProject.title | escape }}</h4>
					<p class="post-meta">
						{% for tag in relevantProject.tags %}
						{% capture tag_name %}{{ tag }}{% endcapture %}
						<a href="/tag/{{ tag_name }}"><code><span style="white-space: nowrap">{{ tag_name }}</span></code></a>&nbsp;
						{% endfor %} <br/>
					</p>
					<p>
						{{ relevantProject.description }}
					</p>
					{% if relevantProject.highlights %}
					<h3>Highlights:</h3>
					<ul>
						{% for hl in relevantProject.highlights %}
						<li>{{ hl }}</li>
						{% endfor %}
					</ul>
					{% endif %}
					<div class="has-text-centered">
						<a class="read-more-button" href="{{ post.url | relative_url }}">Read More</a>
					</div>
				</div>
			</div>
		</div>
		{% endfor %}
	</div>
	<div class="row">
		<div class="col-sm-12 col-md-4">
			<h1>Jam projects</h1>
			{% assign projectsJam = site.projects | sort: 'priority' | where: 'type', "jam" %}
			{%- for project in projectsJam -%}
			{% assign found = false %}
			{% for name in postNames %}
			{% if name == project.title %}
			{% assign found = true %}
			{% break %}
			{% endif %}
			{% endfor %}
			{% if found %}
			{% continue %}
			{% endif %}
			<div class="post-card">
				{% if project.thumbnail %}
				<img src="/assets/images/{{ project.thumbnail }}">
				{% else %}
				<img src="/assets/images/missing-image-placeholder.jpg">
				{% endif %}
				<div class="post-card-content">
					<h4>{{ project.title | escape }}</h4>
					<p class="post-meta">
						{% for tag in project.tags %}
						{% capture tag_name %}{{ tag }}{% endcapture %}
						<a href="/tag/{{ tag_name }}"><code><span style="white-space: nowrap">{{ tag_name }}</span></code></a>
						{% endfor %} <br/>
					{{ project.jam-name }}</p>
					<p>{{ project.excerpt }}</p>
					{% if project.highlights %}
					<h3>Highlights:</h3>
					<ul>
						{% for hl in project.highlights %}
						<li>{{ hl }}</li>
						{% endfor %}
					</ul>
					{% endif %}
					<div class="has-text-centered">
						<a class="read-more-button" href="{{ post.url | relative_url }}">Read More</a>
					</div>
				</div>
			</div>
			{% endfor %}
		</div>
		<div class="col-sm-12 col-md-4">
			<h1>School projects</h1>
			{% assign projects = site.projects | sort: 'priority' | where: 'type', "school-project" %}
			{% for project in projects %}
			{% assign found = false %}
			{% for name in postNames %}
			{% if name == project.title %}
			{% assign found = true %}
			{% break %}
			{% endif %}
			{% endfor %}
			{% if found %}
			{% continue %}
			{% endif %}
			<div class="post-card">
				{% if project.thumbnail %}
				<img src="/assets/images/{{ project.thumbnail }}">
				{% else %}
				<img src="/assets/images/missing-image-placeholder.jpg">
				{% endif %}
				<div class="post-card-content">
					<h4>{{ project.title | escape }}</h4>
					<p class="post-meta">
						{% for tag in project.tags %}
						{% capture tag_name %}{{ tag }}{% endcapture %}
						<a href="/tag/{{ tag_name }}"><code><span style="white-space: nowrap">{{ tag_name }}</span></code></a>&nbsp;
						{% endfor %} <br/>
					</p>
					<p>{{ project.excerpt }}</p>
					<span class="post-meta">Summary:</span>
					<ul class="post-meta">
						{% if project.team %}
						{% if project.role %}
						<li>Role : {{ project.role | escape }} </li>
						{% endif %}
						{% endif %}
						<li>
							{% if project.team %}
							Team : {{ project.team | escape }}
							{% else %}
							Solo Project
							{% endif %}
						</li>
						{% if project.time %}
						<li>Time : {{ project.time | escape }}</li>
						{% endif %}
					</ul>
					<div class="has-text-centered">
						<a class="read-more-button" href="{{ post.url | relative_url }}">Read More</a>
					</div>
				</div>
			</div>
			{% endfor %}
		</div>
		<div class="col-sm-12 col-md-4">
			<h1>Personnal projects</h1>
			{% assign projects = site.projects | sort: 'priority' | where: 'type', "personnal" %}
			{% for project in projects %}
			{% assign found = false %}
			{% for name in postNames %}
			{% if name == project.title %}
			{% assign found = true %}
			{% break %}
			{% endif %}
			{% endfor %}
			{% if found %}
			{% continue %}
			{% endif %}
			<div class="post-card">
				{% if project.thumbnail %}
				<img src="/assets/images/{{ project.thumbnail }}">
				{% else %}
				<img src="/assets/images/missing-image-placeholder.jpg">
				{% endif %}
				<div class="post-card-content">
					<h4>{{ project.title | escape }}</h4>
					<p class="post-meta">
						{% for tag in project.tags %}
						{% capture tag_name %}{{ tag }}{% endcapture %}
						<a href="/tag/{{ tag_name }}"><code><span style="white-space: nowrap">{{ tag_name }}</span></code></a>&nbsp;
						{% endfor %} <br/>
					</p>
					<p>{{ project.excerpt }}</p>
					<div class="has-text-centered">
						<a class="read-more-button" href="{{ post.url | relative_url }}">Read More</a>
					</div>
				</div>
			</div>
			{% endfor %}
		</div>
	</div>
</div>
