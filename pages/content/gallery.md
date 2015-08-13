---
layout: default
title: "Gallery"
splash: title
permalink: "/gallery/"
noindex: true
extensions:
 - name: "controller.mousemove"
---

<div class="gallery row t30">
<ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-4">
	{% for post in site.categories.gallery %}
		<li><a href="{{ site.url }}{{ post.url }}"><img width="100%" alt="{{ post.title }}" title="{{ post.title }}" src="/images/gallery/{{post.thumbnail}}"></a></li>
	{% endfor %}
</ul>
</div>