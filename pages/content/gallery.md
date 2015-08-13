---
layout: page
title: "Gallery"
permalink: "/gallery/"
noindex: true
---
<style>
	div.gallery.row li {
	}
</style>
<div class="gallery row">
<ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-4">
		{% for post in site.categories.gallery %}
		    <li><a href="{{ site.url }}{{ post.url }}"><img width="100%" alt="{{ post.title }}" title="{{ post.title }}" src="/images/gallery/{{post.thumbnail}}"></a></li>
		{% endfor %}
</ul>
</div>