---
layout: page
title: "Examples"
permalink: "/examples/"
noindex: true
---
Each example demonstrates how a [property](/properties/) works. Some of them have multiple [stories](/concepts/), which can be seen by clicking the buttons under the editor. The [JSON](/concepts/#json) in the editor can be changed which is a great way to learn how to use each of the properties.   
<div class="row">
	<div class="columns">
		<ul class="small-block-grid-1 medium-block-grid-2 large-block-grid-3">
			{% for post in site.categories.examples limit:1000 %}
				<li>
				<h4>{{ post.title escape_once }}{% if post.story3 %} <sup>[3]</sup>{% elsif post.story2 %} <sup>[2]</sup>{% endif %}</h4>
				<p>{% if post.teaser %}{{ post.teaser | strip_html | escape }}{% else %}{{ post.desc | strip_html | escape }}{% endif %}
				<a href="{{ site.url }}{{ post.url }}" title="Read {{ post.title escape_once }}">{{ site.data.language.more | downcase }}</a></p>
				</li>
			{% endfor %}
		</ul>
	</div>
</div>
<div class="row t50">
	<div class="columns">
	[2] - Example contains <em>two</em> stories<br>
	[3] - Example contains <em>three</em> stories
	</div>
</div>