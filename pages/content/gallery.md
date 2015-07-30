---
layout: gallery
show_meta: false
title: "Gallery"
hdr: "Title"
subheadline: "Layouts of Feeling Responsive"
header:
   image_fullwidth: "header_unsplash_5.jpg"
permalink: "/gallery/"
---
<div class="row">
    <div class="small-1 columns"></div>
    <div class="small-10 columns">
        <ul>
            {% for post in site.categories.design %}
            <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
            {% endfor %}
        </ul>
    </div>
    <div class="small-1 columns"></div>
</div>