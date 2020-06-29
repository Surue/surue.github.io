---
layout: page
title: Contact Me
thumbnail: answer_knot.jpg
---
<div class="container">
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