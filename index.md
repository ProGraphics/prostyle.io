---
layout: page-front
title: "ProStyle"
desc: "Craft rich web animations with ease™"
cont_tap: true
cont_mousewheel: true
item_barchart: true
widget-1:
    title: "Stories"
    url: '/write-stories/'
    text: "Get Started. Write web animations using a simple JSON language and add them to your website."
    icon: 'fa-pencil'
widget-2:
    title: "Gallery"
    url: '/gallery/'
    text: 'Looking for inspiration? View example animations. Try changing the story right in the gallery.'
    icon: 'fa-desktop'
widget-3:
    title: "Plus"
    url: '/plus/'
    text: 'An assortment of premium extensions that you can plug into your stories to make them even better.'
    icon: 'fa-plus'
---
<div class="row t50">
  <div class="medium-4 columns">
    <ul class="inline-list inline-social-icons">
    {% for social_item in site.data.socialmedia %}
    <li><a href="{{ social_item.url }}" target="_blank" class="{{ social_item.class }}" title="{{ social_item.title }}"></a></li>
    {% endfor %}
    </ul>
  </div>
  <div class="medium-8 columns">
		{% include alert text="Looking for someone to create great animation for you? &nbsp; <a href='https://pro.graphics/custom-animation/'>Hire us!</a>" %}
	</div>
</div>