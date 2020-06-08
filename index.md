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
					<p>Hi, I'm Nicolas, a game programmer from switzerland. I'm a student at the SAE Institute of Geneva in <b>my last year of game programming</b>. I'm mostly doing school project and game jams. Most of my project are around <b>AI and procedural content generation</b> but my final goal is to be an <b>engine programmer</b>. </p>
					<p>Here you can see most of my <a href="projects.html">projects</a> than can be separated in 3 categories; Schools project, jams and personnal. I also try to write some <a href="blog.html">articles</a> that wary between designing systems, implementation or even some post mortems. If you want to talk or have more precise information on some of my project, you can <a href="contact_me.html">contact me</a>.</p>
				</div>
			</div>
			<h1 style="margin-top: 40px;">Projects</h1>
			{%- assign interestingProject = site.projects | sort: "last_update" | reverse -%}
			{%- for project in interestingProject limit:6 -%}
			<div class="row" style="margin-top: 40px;">
			{% assign value = forloop.index | modulo:2 %}
			{% if value == 0 %}
			<div class="col-sm-12 col-md-5" style="padding-left: 0px; display: flex; justify-content: center; align-items: center;">
				<a href="{{ project.url | relative_url }}">
					<img src="/assets/images/{{project.thumbnail}}">
				</a>
			</div>
			<div class="col-sm-12 col-md-7" style="padding-left: 0px;">
				<a class="post-link" href="{{ project.url | relative_url }}">{{ project.title | escape }}</a>
				<div class="post-meta">
					{% for tag in project.tags %}
					{% capture tag_name %}{{ tag }}{% endcapture %}
						<a href="/tag/{{ tag_name }}"><code><span style="white-space: nowrap">{{ tag_name }}</span></code></a>&nbsp;
					{% endfor %}
				</div>
				{% if project.excerpt %}
					<p>{{ project.excerpt }}</p>
				{% endif %}
				{% if project.highlights %}
				<h3>Highlights:</h3>
				<ul>
				{% for hl in project.highlights %}
					<li>{{ hl }}</li>
				{% endfor %}
				</ul>
				{% endif %}
			</div>
			{% else %}
			<div class="col-sm-12 col-md-7" style="padding-left: 0px;">
				<a class="post-link" href="{{ project.url | relative_url }}">{{ project.title | escape }}</a>
				<div class="post-meta">
					{% for tag in project.tags %}
					{% capture tag_name %}{{ tag }}{% endcapture %}
						<a href="/tag/{{ tag_name }}"><code><span style="white-space: nowrap">{{ tag_name }}</span></code></a>&nbsp;
					{% endfor %}
				</div>
				{% if project.excerpt %}
					<p>{{ project.excerpt }}</p>
				{% endif %}
				{% if project.highlights %}
				<h3>Highlights:</h3>
				<ul>
				{% for hl in project.highlights %}
					<li>{{ hl }}</li>
				{% endfor %}
				</ul>
				{% endif %}
			</div>
			<div class="col-sm-12 col-md-5" style="padding-left: 0px; display: flex; justify-content: center; align-items: center;">
				<a href="{{ project.url | relative_url }}">
					<img src="/assets/images/{{project.thumbnail}}">
				</a>
			</div>
			{% endif %}
			</div>
			{%- endfor -%}
			<h1 style="margin-top: 40px;">Contact me</h1>
			<div class="row" style="font-size: 3vw">
				{% assign sm = site.data.social-media %}
				{% for entry in sm %}
			        {% assign key = entry | first %}
			        <div class="col-sm-3 col-md-3">
			        {% if sm[key].id %}
			            <a href="{{ sm[key].href }}{{ sm[key].id }}" title="{{ sm[key].title }}" target="_blank"><i class="{{ sm[key].fa-icon }} fa-3x" style="color: {{ sm[key].color }}"></i></a>
			        {% endif %}
			    	</div>
			    {% endfor %}
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