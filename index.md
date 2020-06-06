---
layout: home
list_title: Latest posts
---
<div class="container">
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<div class="row">
				<div class="col-sm-12">
					<h1>About me</h1>
					<img src="assets/images/Nico.png" align="left" style="width: 30%; margin-right: 10px;">
					<p>Hi, I'm Nicolas, a game programmer from switzerland. I'm a student at the SAE Institute of Geneva in <b>my last year in a game programming</b> courses. I'm mostly doing school project and game jams. Most of my project are around <b>AI and procedural content generation</b> but my final goal is to be an <b>engine programmer</b>. <br /><br />
					I've already done some work in that area, the first one was a 2D physics engine at the end of my first year. Then at the end of the second I've made a 3D graphics small engine using Vulkan as the graphics API. Finally during my last year I've led a team and together we made a complete <a href="projects/pok_engine.html">3D engine</a> that runs on a pc and on the Nintendo Switch.</p>
				</div>
			</div>
			<div class="row" style="height: 30px">
			</div>
			<div class="row">
				<h1>Projects</h1>
				{%- assign interestingProject = site.projects | sort: "last_update" | reverse -%}
				{%- for project in interestingProject limit:5 -%}
				<div style="margin-bottom: 20px;">
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
					<p>
					{{project.excerpt}}
					</p>
					<div style="clear: both;"></div>
				</div>
				{%- endfor -%}
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