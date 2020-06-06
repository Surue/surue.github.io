---
layout: page
title: About Me
---

<div style="float:left; width: 30%; box-sizing:border-box; padding: 10px;">
	<div class="box" style="text-align: center">
		<img src="assets/images/Nico.png"><br />
		<h4>Nicolas Schneider</h4>
		A game engine enthusiastic <br />
		  
		{%- assign social = site.minima.social_links -%}

		{%- if social.github -%}<a rel="me" href="https://github.com/{{ social.github | cgi_escape | escape }}" title="{{ social.github | escape }}"><svg class="svg-icon grey"><use xlink:href="{{ '/assets/minima-social-icons.svg#github' | relative_url }}"></use></svg></a>{%- endif -%}
		{%- if social.twitter -%}<a rel="me" href="https://twitter.com/{{ social.twitter | cgi_escape | escape }}" title="{{ social.twitter | escape }}"><svg class="svg-icon grey"><use xlink:href="{{ '/assets/minima-social-icons.svg#twitter' | relative_url }}"></use></svg></a>{%- endif -%}
		<h6><a href="../assets/pdfs/CV_2.pdf">My Resume</a></h6>
		<h6>Switzerland</h6><br/>
	</div>
	<div class="box" style="margin-top: 20px;">
	<h2>Skills</h2>
	<p>C++, Unity, C#</p>
	</div>
</div>
<div style="float:left; width: 70%; box-sizing:border-box; padding: 10px;">
	<div class="box">
		<h2 class="box-title">About</h2>
		<p>Hi, I'm Nicolas Schneider. I'm currently a student at the SAE Institute of Geneva in <b>my last year in a game programming</b> courses. I'm mostly doing school project and game jams. 
		Most of my project are around <b>AI and procedural content generation</b> but my final goal is to be an engine programmer. <br /><br/>
		I've already done some work in that area, the first one was a 2D physics engine at the end of my first year. Then at the end of the second I've made a 3D graphics 
		small engine using Vulkan as the graphics API. Finally during my last year I've led a team and together we made a complete <a href="projects/pok_engine.html">3D engine</a> that runs on a pc and on the Nintendo Switch.</p>
	</div>
	<div class="box" style="margin-top: 20px;">
		<h2 class="box-title">Work Experience</h2>
		<div>
			<h3>Lecturer & Supervisor at the SAE Institute of Geneva</h3>
			<div class="sub-data">Current job</div>
			<img src="assets/images/sae_logo.png" align="left" style="width: 30%">
			<p style="text-align: justify; text-justify: inter-word;">Since September 2019 and after a first trial between March and June of the same year, I became a teacher at <a href="https://www.sae.swiss/">my school</a>. I'm in charge of most of the classes for the 
			first year in game programming. I'm teaching the basics of c++ and c#. How to use Unity. I'm also teaching them the basics of AI and procedural content generation followed
			by the creation of their own 2D physics engine in c++.</p>
		</div>
		<hr />
		<div>
			<h3>Internship at Team KwaKwa</h3>
			<div class="sub-data">September 2018 - February 2019</div>
			<img src="assets/images/kwakwa.png" align="right" style="width: 30%; margin-left: 10px;">
			<p style="text-align: justify; text-justify: inter-word;">I worked at <a href="https://team-kwakwa.com/">Team KwaKwa</a> on their yet non-announced game. My main task was to work on an <b>open-world featuring islands and pirates</b>. The goal for me was to quickly 
			iterate over different type of procedural generation to create those new world. I also had the task to implement some basics AI behavior for the open-world with every 
			agents patrolling the islands using path finding. Finally this feature was cut to have a game more focused on the core mechanics. 
			</p>
		</div>
		<hr />
		<div>
			<h3>Internship at Oniroforge</h3>
			<div class="sub-data">May 2018</div>
			<img src="assets/images/oniroforge.png" align="left" style="width: 20%; margin-right: 10px;">
			<p style="text-align: justify; text-justify: inter-word;">I worked at Oniroforge to help them finish their game. It was a <b>VR game</b> on the Occulus rift and the Samsung Gear VR. I was in charge of
			implementing the last world of the game. It made me work in a full 3D environment, import and managing resources. I also work on the <b>AI for 3 enemies</b> specific 
			to this level.</p>
		</div>
	</div>
	<div class="box" style="margin-top: 20px;">
		<h2 class="box-title">Other</h2>
		<div>
		</div>
		<div>
			<h3>LvlUp Game Jam</h3>
			<div class="sub-data">Since 2018</div>
			<img src="assets/images/lvlup_game_jam.jpg">
			<p>Since 2018 I'm in the committee of a <a href="https://lvlupgamejam.ch/">Game Jam</a> that take place every year, bringing together around 70 persons. This jam is
			special because every game in graded by a jury of professional coming from the Swiss's video game industry. With this event we try to create a link between the people
			doing their first game and those who already work in the industry.</p>
		</div>
		<hr />
		<div>
			<h3>Swiss Game Academy</h3>
			<div class="sub-data">Since 2018</div>
			<iframe src="https://www.youtube.com/embed/4IqqYseWubY" align="left" style="margin-right: 10px"></iframe>
			<p>This is a one week event where we teach the basics of video development (art, prog, audio, design) and around one hundred people do their first game. In 2018 I
			was a coach, in charge of helping setting up everything and the teams to make their game. In 2019 I was a also a teacher, I make a short introduction of how to use 
			procedural content generation in a game jam. And since 2020 I'm in the committee, in charge of the coaches and the organization during the event.</p>
		</div>
	</div>
	<div class="box" style="margin-top: 20px;">
		<h2 class="box-title">Education</h2>
		<div>
			<div style="float: left; width: 20%; box-sizing: border-box; padding-right: 10px;">
				<img src="assets/images/sae_logo.png" style="vertical-align: middle">
			</div>
			<div style="float: left; width: 80%; box-sizing: border-box;">
				<span style="font-size: 20px">Game Programming</span><br />
				<a href="https://www.sae.swiss/"><span style="font-size: 12px">SAE Institute Geneva</span></a><br />
				Bachelor of Science
			</div>
			<div style="clear:both"></div>
		</div>
	</div>
</div>