---
layout: home
list_title: Latest posts
thumbnails: 
- home/home_01.gif
- home/home_02.gif
- home/home_03.gif
tag_highlight: c++
---
<!-- ABOUT ME -->
<div>
	<div class="wrapper">
		<div class="container">
			<!-- ABOUT ME -->
			<div class="row">
				<div class="col-sm-12 col-md-8">
					<h1>About me</h1>
					<p>Hi, I'm Nicolas, a game programmer from switzerland. I'm a student at the SAE Institute of Geneva in <b>my last year of game programming</b>. I'm mostly doing school project and game jams. Most of my project are around <b>AI and procedural content generation</b> but my final goal is to be an <b>engine programmer</b>. </p>
					<p>Here you can see most of my <a href="projects.html">projects</a> than can be separated in 3 categories; Schools project, jams and personnal. I also try to write some <a href="blog.html">articles</a> that wary between designing systems, implementation or even some post mortems. If you want to talk or have more precise information on some of my project, you can <a href="contact_me.html">contact me</a>.</p>
				</div>
				<div class="col-sm-12 col-md-4">
					<img src="assets/images/Nico.png" style="width: 100%; margin-right: 10px;">
				</div>
			</div>
		</div>
	</div>
</div>

<!-- POSTS --> 
<div>
	<div class="wrapper">
		<div class="container">
			{% if site.paginate %}
				{% assign posts = paginator.posts %}
			{% else %}
				{% assign posts = site.posts %}
			{% endif %}
			{%- if posts.size > 0 -%}
				{%- if page.list_title -%}
				<div class="row">
					<div class="col-sm-6 col-md-6">
						<h2 class="post-list-heading">{{ page.list_title }}</h2>
					</div>
					<div class="col-sm-6 col-md-6" style="display: flex; flex-direction: row-reverse;">
						<a class="read-more-button" href="blog.html" style="align-self: center;">All Posts</a>
					</div>
				</div> 
				{%- endif -%}
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
</div>

<!-- HIGHLIGHT SUBJECT -->
<div style="background: #1c1c1c">
	<div class="wrapper">
		<div class="container">
			{% assign all_tags = site.projects | map:"tags" | join:"," | split:"," | uniq | sort %}
			<div class="row">
				<div class="col-md-12">
					<h1 style="text-align: center;">Highlighted Subject</h1>
				</div>
				<div class="col-sm-12 col-md-6">
			  		<a href="/tag/{{page.tag_highlight}}"><h1>{{ page.tag_highlight }}</h1></a>
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
					{% for project in site.projects %}
						{% for tag in project.tags %}
							{% if tag == page.tag_highlight %}
								<div>
									<a href="{{ post.url }}">{{ project.title }}</a>
									{{ project.excerpt }}
								</div>
								{% break %}
							{% endif %}
						{% endfor %}
					{% endfor %}
				{% endif %}
	  		  	<!-- tag posts -->
	  		  	{% if site.tags[page.tag_highlight].size > 0 %}
	  		  		<h2>Posts</h2>
	  		  		{% for post in site.tags[page.tag_highlight] %}
	  		  			<div>
					  		<a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }})<br>
					  		{{ post.excerpt }}
						</div>
					{% endfor %}
	  		  	{% endif %}
				</div>
			</div>
		</div>
	</div>
</div>

<!-- PROJECTS -->
<div>
	<div class="wrapper">
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-md-6">
					<h1>Projects</h1>
				</div>
				<div class="col-sm-6 col-md-6" style="display: flex; flex-direction: row-reverse;">
					<a class="read-more-button" href="projects.html" style="align-self: center;">All Projects</a>
				</div>
				{%- assign interestingProject = site.projects | sort: "last_update" | reverse -%}
				{%- for project in interestingProject limit:3 -%}
					<div class="col-sm-12 col-md-4">
						{% include project-card.html project = project%}
					</div>
				{%- endfor -%}
			</div>
		</div>
	</div>
</div>