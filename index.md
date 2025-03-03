---
layout: home
title: Home
tag_highlight: c++
---
<!-- ABOUT ME -->
<section style="padding-top: clamp(10px, 5vh, 20px); min-height: 100vh;">
	<div class="wrapper">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-8">
						<h1>Nicolas Schneider</h1>
						<h2> Associate Lead Programmer at Old Skull Games</h2>
						<p>Hi, I'm Nicolas, a game programmer from switzerland. I'm a student at the SAE Institute of Geneva in <b>my last year of game programming</b>. I'm mostly doing school project and game jams. Most of my project are around <b>AI and procedural content generation</b> but my final goal is to be an <b>engine programmer</b>. </p>
						<p>Here you can see most of my <a href="projects.html">projects</a> than can be separated in 3 categories; Schools project, jams and personnal. I also try to write some <a href="blog.html">articles</a> that wary between designing systems, implementation or even some post mortems.</p>
				</div>
				<div class="col-sm-12 col-md-4">
					<img src="assets/images/Nico.png" style="width: 100%; margin-right: 10px;">
				</div>
			</div>
			<div class="col-sm-12 col-md-12">
				<a class="arrow-link" href="about_me.html">Learn more about me</a>
			</div>
		</div>
	</div>
</section>

<!-- BLOG --> 
<section style="padding-top: clamp(20px, 5vw, 60px); min-height: 100vh;">
	<div class="wrapper">
		<div class="container">
			{% if site.paginate %}
				{% assign posts = paginator.posts %}
			{% else %}
				{% assign posts = site.posts %}
			{% endif %}
			{%- if posts.size > 0 -%}
				<div class="row">
					<div class="col-sm-12 col-md-12" style="margin-bottom: 15px;">
						<h1 style="margin-bottom: 0px;">Blog</h1><a class="arrow-link" href="blog.html" >Read all articles</a>
					</div>
				</div> 
				{%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
				<div class="row">
				{%- for post in posts limit:3-%}
					<div class="col-sm-12 col-md-4">
						{% include post.html post = post%}
					</div>
				{%- endfor -%}
				</div>
			{%- endif -%}
		</div>
	</div>
</section>

<!-- HIGHLIGHT SUBJECT -->
<section style="background: #1c1c1c; padding-top: clamp(20px, 5vw, 60px); min-height: 100vh;">
	<div class="wrapper">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-12" style="text-align: center;">
					<h1>Highlighted Suject : <a href="/tag/{{page.tag_highlight}}" style="color: {{site.data.tags[page.tag_highlight].color}};">{{ page.tag_highlight }}</a></h1>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 col-md-6">
		  		  	<p>{{ site.data.tags[page.tag_highlight].description }}</p>
			  	</div>
				<div class="col-sm-12 col-md-6">
					<!-- tag projects -->
					{% assign foundProject = false %}
					{% for project in site.projects %}
						{% for tag in project.tags %}
							{% if tag == page.tag_highlight %}
								{% assign foundProject = true %}
								{% break %}
							{% endif %}
						{% endfor %}
						{% if foundProject %}
							{% break %}
						{% endif %}
					{% endfor %}
					{% if foundProject %}
						<h2>Projects</h2>
						<div class="minimal-grid">
							{% assign project_count = 0 %} 
							{% for project in site.projects %}
								{% for tag in project.tags %}
									{% if tag == page.tag_highlight %}
										{% assign main_tag = project.tags[0] %}
										{% assign bar_color = site.data.tags[main_tag].color | default: "#3498db" %}
										<div class="minimal-card" style="--card-bar: {{ bar_color }};">
					                		<div class="minimal-card-content">
												<h4>{{ project.title }}</h4>
												<p>{{ project.excerpt }}</p>
												<div class="has-text-centered" style="padding-bottom: 10px; position: absolute; bottom: 0px;">
													<a class="read-more-button" href="{{ project.url }}">Read More</a>
												</div>
											</div>
						            	</div>
										{% assign project_count = project_count | plus: 1  %}
										{% break %}
									{% endif %}
								{% endfor %}
								{% if project_count == 3 %}
										{% break %}
								{% endif %}
							{% endfor %}
						</div>
					{% endif %}
		  		  	<!-- tag posts -->
		  		  	{% if site.tags[page.tag_highlight].size > 0 %}
		  		  		<h2>Posts</h2>
		  		  		<div class="minimal-grid">
			  		  		{% for post in site.tags[page.tag_highlight] limit:3%}
			  		  		{% assign main_tag = post.tags[0] %}
							{% assign bar_color = site.data.tags[main_tag].color | default: "#3498db" %}
				              <div class="minimal-card" style="--card-bar: {{ bar_color }};">
				                <div class="minimal-card-content">
				                  	<h4>{{ post.title }}</h4>
				                  	<p>{{ post.excerpt }}</p>
				                  	<div class="has-text-centered" style="padding-bottom: 10px; position: absolute; bottom: 0px;">
										<a class="read-more-button" href="{{ post.url }}">Read More</a>
									</div>
				                </div>
				              </div>
							{% endfor %}
						</div>
		  		  	{% endif %}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- PROJECTS -->
<section style="padding-top: clamp(20px, 5vw, 60px); min-height: 100vh;">
	<div class="wrapper">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-12" style="margin-bottom: 15px;">
					<h1 style="margin-bottom: 0px;">Projects</h1><a class="arrow-link" href="projects.html">Find more projects</a>
				</div>
			</div>
			<div class="row">
				{%- assign interestingProject = site.projects | sort: "last_update" | reverse -%}
				{%- for project in interestingProject limit:3 -%}
					<div class="col-sm-12 col-md-4">
						{% include project-card.html project = project%}
					</div>
				{%- endfor -%}
			</div>
		</div>
	</div>
</section>