---
layout: post
title: Projects
---
{%- assign mainProject = site.projects | where:"priority" ,1 | first-%}
<div class="box" style="margin-bottom: 20px;">
<h2><a href="{{ mainProject.url | relative_url }}">{{mainProject.title}}</a></h2>
<a href="{{ mainProject.url | relative_url }}"><img src="/assets/images/{{mainProject.thumbnail}}"></a>
<span class="post-meta">{{ mainProject.tag }}</span>
{{mainProject.excerpt}}
</div>

<div class="box">
<h2>Interesting projects</h2>

{% assign count = 0 %}
{%- assign interestingProject = site.projects | where: 'priority', 2 -%}
{%- for project in interestingProject -%}
	{% assign value = forloop.index | modulo:2 %}
	{% if value == 0 %} <!-- right -->
	<div style="float: left; width: 50%; padding:0px 0px 0px 10px; box-sizing:border-box;">
	{% else %} <!-- left -->
	<div style="float: left; width: 50%; padding:0px 10px 0px 0px; box-sizing:border-box;">
	{% endif %}
		<a class="post-link" href="{{ project.url | relative_url }}">{{ project.title | escape }}</a>
		<a href="{{ project.url | relative_url }}"><img src="/assets/images/{{project.thumbnail}}"></a>
		<span class="post-meta">{{ project.tag }}</span>
		{{project.excerpt }}
		<ul>
			<li>Role {{ project.role | escape }} </li>
			<li>
			{% if project.team %}
				Team size = {{ project.team | escape }}
			{% else %}
				Solo Project
			{% endif %}
			</li>
			<br/>
		</ul>
	</div>
	{% assign count = count | plus: 1 %}
{%- endfor -%}
<div style="color:white">emtpy</div>
</div>

<div style="clear:both;"></div>
<div style="float: left; width: 50%; padding-right: 10px; padding-top: 10px; box-sizing:border-box; ">
	<div class="box">
		<h2>Jams</h2>
		{% assign projects = site.projects | sort: 'priority' | where: 'type', "Jam" %}
		{%- for project in projects -%}
		<div style="margin-bottom: 10px;">
			<a href="{{ project.url | relative_url }}"><img src="/assets/images/{{project.thumbnail}}" style="float: left; max-width: 40%; padding-right: 5px"></a>
			<a style="font-size:16px;" class="post-link" href="{{ project.url | relative_url }}">{{ project.title | escape }}</a>
			<span class="post-meta">{{ project.jam-name }}</span>
			<p style="clear:both;">{{project.excerpt | strip_html| truncatewords: 30}} <a href="{{ project.url | relative_url }}">read more</a></p>
			
		</div>
		{% if forloop.index < projects.size %}
		<hr/>
		{% endif %}
		<div style="clear:both;"></div>
		{%- endfor -%}
	</div>
</div>
<div style="float: left; width: 50%; padding-left: 10px; padding-top: 10px; box-sizing:border-box; ">
	<div class="box">
	<h2>Schools project</h2>
	{% assign projects = site.projects | sort: 'priority' | where: 'type', "School Project" %}
	{%- for project in projects -%}
		<div style="margin-bottom: 10px;">
			<a href="{{ project.url | relative_url }}"><img src="/assets/images/{{project.thumbnail}}" style="float: left;max-width: 40%; padding-right: 5px"></a>
			<a style="font-size:16px;" class="post-link" href="{{ project.url | relative_url }}">{{ project.title | escape }}</a>
			<p class="post-meta">{{ project.tag }}</p>
			<p style="clear:both;">{{project.excerpt | strip_html| truncatewords: 30}} <a href="{{ project.url | relative_url }}">read more</a></p>
			<span class="post-meta">Summary:</span>
			<ul class="post-meta" style="clear:both; margin-top: 0px;">
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
			
		</div>
		{% if forloop.index < projects.size %}
		<hr/><br/>
		{% endif %}
		<div style="clear:both;"></div>
		{%- endfor -%}
	</div>
</div>
<div style="clear:both;"></div>