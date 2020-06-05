---
layout: home
list_title: Latest posts
---

<div style="float: left; box-sizing:border-box; width: 70%; padding-right: 20px;">
	<div class="box">
		<p>Ceocrebv</p>
		<p>
		Hi, I'm Nicolas Schneider and this is my blog. You can find here my projects and articles mostly about AI, procedural content generation and custom game engine.
		</p>
	</div>
	<div class="box" style="margin-top: 20px;">
		<h2>Projects</h2>
		{% assign count = 0 %}
		{%- assign interestingProject = site.projects | sort: "last_update" | reverse -%}
		{%- for project in interestingProject limit:5 -%}
		{% if forloop.index < 5 %}
		<div style="margin-bottom: 20px; border-bottom: 1px solid rgb(220,220,220);">
		{% else %}
		<div>
		{% endif %}
			<a class="post-link" href="{{ project.url | relative_url }}">{{ project.title | escape }}</a>
			<div class="post-meta">
			{% for tag in project.tags %}
			{% capture tag_name %}{{ tag }}{% endcapture %}
				<a href="/tag/{{ tag_name }}"><code><span style="white-space: nowrap">{{ tag_name }}</span></code></a>&nbsp;
			{% endfor %}
			</div>
			<a href="{{ project.url | relative_url }}">
				{% assign value = forloop.index | modulo:2 %}
				{% if value == 0 %}
				<img src="/assets/images/{{project.thumbnail}}" align="left" style="width: 30%; margin-right: 10px;">
				{% else %}
				<img src="/assets/images/{{project.thumbnail}}" align="right" style="width: 30%; margin-left: 10px;">
				{% endif %}
			</a>
			<p style="text-align: justify; text-justify: inter-word;">
			{{project.excerpt}}
			</p>
			<div style="clear: both;"></div>
		</div>
		{% assign count = count | plus: 1 %}
		{%- endfor -%}
	</div>
</div>
<div style="float: left; box-sizing:border-box; width: 30%;">
	{% if site.paginate %}
		{% assign posts = paginator.posts %}
	  {% else %}
		{% assign posts = site.posts %}
	  {% endif %}


	  {%- if posts.size > 0 -%}
		{%- if page.list_title -%}
		  <h2 class="post-list-heading">{{ page.list_title }}</h2>
		{%- endif -%}
		  {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
		  {%- for post in posts -%}
			  <div class="post-card">
			  	{% if post.thumbnail %}
			  		img src="/assets/images/{{ post.thumbnail }}">
			  	{% else %}
			  		<img src="/assets/images/missing-image-placeholder.jpg">
			  	{% endif %}
			  	<div class="post-card-content">
					<h4>
						{{ post.title | escape }}
					</h4>
					<div class="post-meta">
						{% for tag in post.tags %}
						{% capture tag_name %}{{ tag }}{% endcapture %}
							<a href="/tag/{{ tag_name }}"><code><span style="white-space: nowrap">{{ tag_name }}</span></code></a>&nbsp;
						{% endfor %}
					
					</div>
					<p>{{ post.excerpt }}</p>
					<div class="has-text-centered">
						<a class="read-more-button" href="{{ post.url | relative_url }}">Read More</a>
					</div>
				</div>
				<div class="post-card-footer">
					Published: {{ post.date | date: date_format }}
				</div>
			  </div>
		  {%- endfor -%}

	  {%- endif -%}
</div>
<div style="clear:both"></div>