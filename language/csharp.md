---
layout: default
title: csharp
---
<div class="wrapper">
	<div class="container">
		<!-- C# -->
		<div class="row">
			<section>
				<div class="col-md-12">
					<h1>C#</h1>
					<p>I've been using C# almost daily for the past eight years. During my studies, it was my go-to language for rapid prototyping and exams, a habit I’ve carried into game jams. Professionally, C# has been a core part of every job I’ve had, allowing me to work on both gameplay and tools programming.</p>
				</div>
			</section>
		</div>
		<!-- Projects -->
		<section>
			<div class="row">
				{%- assign interestingProject = site.projects | sort: "last_update" | where: 'languages', 'csharp'  | reverse -%}
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
				{%- assign interestingProject = site.posts | sort: "date" | where: 'languages', 'csharp'  | reverse -%}
				{%- for project in interestingProject -%}
					<div class="col-md-6">
						{% include project-card-horizontal.html project = project%}
					</div>
				{%- endfor -%}
			</div>
		</section>
	</div>
</div>