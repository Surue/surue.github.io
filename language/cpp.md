---
layout: default
title: cpp
---
<div class="wrapper">
	<div class="container">
		<!-- Cpp -->
		<section>
			<div class="row">
				<div class="col-md-12">
					<h1>C++</h1>
					<p>I studied C++ extensively during my three years of education, using it to experiment with game engine development—from building a 2D physics engine to working with Vulkan for rendering and even creating a custom C++ engine for an FX-0-style space shooter running on the Switch. While I no longer use C++ professionally, it remains a go-to language for some of my personal projects, fueling my passion for low-level programming.</p>
				</div>
			</div>
		</section>
		<!-- Projects -->
		<section>
			<div class="row">
				{%- assign interestingProject = site.projects | sort: "last_update" | where: 'languages', 'cpp'  | reverse -%}
				{%- for project in interestingProject -%}
					<div class="col-md-4">
						{% include project-card.html project = project%}
					</div>
				{%- endfor -%}
			</div>
		</section>
		<!-- Articles -->
		<section>
			<div class="row">
				{%- assign interestingProject = site.posts | sort: "date" | where: 'languages', 'cpp'  | reverse -%}
				{%- for project in interestingProject -%}
					<div class="col-md-6">
						{% include project-card-horizontal.html project = project%}
					</div>
				{%- endfor -%}
			</div>
		</section>
	</div>
</div>