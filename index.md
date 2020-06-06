---
layout: home
list_title: Latest posts
---
<div class="container">
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<div class="row">
				<div class="col-sm-12">
					<div class="box">
						<p>
						Hi, I'm Nicolas Schneider and this is my blog. You can find here my projects and articles mostly about AI, procedural content generation and custom game engine.
						</p>
					</div>
				</div>
			</div>
			<div class="row">
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
		</div>
		<div class="col-sm-12 col-md-4">
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
					  {% include post.html post = post%}
				  {%- endfor -%}
			  {%- endif -%}
		</div>
	</div>
</div>