---
layout: home
title: Home
tag_highlight: unity
---
<!-- ABOUT ME -->
<section style="padding-top: clamp(10px, 5vh, 20px); min-height: 100vh; background: linear-gradient(0deg, #0D0D0D 0%, #1A1A1A 100%);">
	<div class="wrapper">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-8">
					<h1>Nicolas Schneider</h1>
					<h2> Associate Lead Programmer at Old Skull Games</h2>
				</div>
				<div class="col-sm-12 col-md-4">
					<img src="assets/images/Nico.png" style="width: 100%; margin-right: 10px;">
				</div>
			</div>
			<div class="col-sm-12 col-md-12">
				<p>Welcome to my digital portfolio. My journey has been driven by a desire to support every facet of game development, from gameplay mechanics to the cutting-edge tools that make it all possibl. I began my career as a gameplay programmer, diving into projects that ranged from VR experiences to crafting open worlds. These experiences, even leading me to showcase projects at industry events.</p>
				<p>My commitment to sharing knowledge led me to teaching roles at SAE Institute and Game Sup, where I delivered focused modules on procedural generation, AI, and even the fundamentals of physics and C++. Alongside mentoring students and guiding first-year cohorts.</p>
				<p>Today, as an Associate Lead Programmer at Old Skull Games, I manage small, multidisciplinary teams and continue to push the boundaries of both gameplay and tool development. I’m involved in every stage of the process—from sprint planning and setting coding guidelines to directly collaborating with various departments to refine our projects. Through this website, I share my projects, articles, and insights, with the hope of inspiring fellow developers and providing potential recruiters a clear view of my expertise and passion for the game industry.</p>
				<a class="arrow-link" href="about_me.html">Learn more about me</a>
			</div>
		</div>
	</div>
</section>

<!-- BLOG --> 
<section style="padding-top: clamp(20px, 5vw, 60px); min-height: 100vh; background: linear-gradient(0deg, #0D0D0D 0%, #1A1A1A 100%);">
    <div class="wrapper">
        <div class="container">
            {% if site.paginate %}
                {% assign posts = paginator.posts %}
            {% else %}
                {% assign posts = site.posts %}
            {% endif %}
            {%- if posts.size > 0 -%}
                <div class="row">
                    <div class="col-sm-12 col-md-12" style="display: flex; align-items: flex-end;">
                        <h1 style="margin-bottom:0px;">My Articles</h1>
						<div style="flex-grow: 1;"></div>
						<button id="scroll-left" style="margin-right: 10px;"><i class="fas fa-chevron-left" style="margin-right: 3px; margin-top: 3px;"></i></button>
						<button id="scroll-right"><i class="fas fa-chevron-right" style="margin-left: 3px; margin-top:3px;"></i></button>
                    </div>
                </div> 
				<div class="row">
                    <div class="col-sm-12 col-md-12" style="display: flex; align-items: flex-end;">
						<span><a class="arrow-link" href="blog.html">Read articles, post mortem, tutorial</a></span>
                    </div>
                </div>
                {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
				<div class="col-sm-12 col-md-12">
					<div id="blog-posts-container">
					{%- for post in posts limit:10 -%}
						<div class="scroll-card">
							{% include post.html post = post %}
						</div>
					{%- endfor -%}
					</div>
				</div>
            {%- endif -%}
        </div>
    </div>
</section>
<script>
	// Function to set all cards to the same height
	const setEqualCardHeights = () => {
	const cards = document.querySelectorAll('.post-card');
	let maxHeight = 0;
	cards.forEach(card => {
		card.style.height = 'auto';
	});
	// Reset heights to auto to recalculate
	// Calculate the maximum height
	cards.forEach(card => {
		const cardHeight = card.scrollHeight; // Use scrollHeight to account for dynamic content
		if (cardHeight > maxHeight) {
			maxHeight = cardHeight;
		}
	});
	// Apply the maximum height to all cards
	cards.forEach(card => {
		card.style.height = `${maxHeight}px`;
	});
	};
	// Run the function on page load
	window.addEventListener('load', setEqualCardHeights);
	// Run the function on window resize to handle responsiveness
	window.addEventListener('resize', setEqualCardHeights);
</script>
<script>
  const container = document.getElementById('blog-posts-container');
  const scrollLeftButton = document.getElementById('scroll-left');
  const scrollRightButton = document.getElementById('scroll-right');
  // Dynamically calculate the width of a single card
  const getCardWidth = () => {
    const card = container.querySelector('.scroll-card');
    return card ? card.offsetWidth + 35 : 0; // Add 35px gap between cards
  };
  scrollLeftButton.addEventListener('click', function () {
	const scrollAmount = getCardWidth();
    container.scrollLeft -= scrollAmount; // Scroll left
  });
  scrollRightButton.addEventListener('click', function () {
	const scrollAmount = getCardWidth();
    container.scrollLeft += scrollAmount; // Scroll right
  });
</script>

<!-- HIGHLIGHT SUBJECT -->
<section style="background: #1c1c1c; padding-top: clamp(20px, 5vw, 60px); min-height: 100vh; background: #262626;">
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

<!-- Languages -->
<section style="padding-top: clamp(20px, 5vw, 60px); min-height: 100vh; background: linear-gradient(180deg, #1A1A1A 0%, #0D0D0D 100%);">
	<div class="wrapper">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-6">
					<h2>C#</h2>
					<a href="/language/csharp" class="arrow-link" style="padding-left:20px;">More projects about C#</a>
					{%- assign interestingProject = site.projects | sort: "last_update" | where: 'languages', csharp  | reverse -%}
					{%- for project in interestingProject limit:3 -%}
							{% include project-card-horizontal.html project = project%}
					{%- endfor -%}
				</div>
				<div class="col-sm-12 col-md-6" style="border-left: 1px solid grey;">
					<h2>C++</h2>
					<a href="/language/cpp" class="arrow-link" style="padding-left:20px;">Read articles about C++</a>
					{%- assign interestingProject = site.posts | sort: "last_update" | where: 'languages', cpp  | reverse -%}
					{%- for project in interestingProject limit:3 -%}
							{% include project-card-horizontal.html project = project%}
					{%- endfor -%}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- PROJECTS -->
<section style="padding-top: clamp(20px, 5vw, 60px); min-height: 100vh; background: linear-gradient(0deg, #0D0D0D 0%, #1A1A1A 65%, #1A1A1A 72%, #0D0D0D 100%);">
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