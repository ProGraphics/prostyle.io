---
layout: page
title: "Write Stories"
desc: "Write your stories using a simple text language and our ProStyle JavaScript library will transform it into animated web content."
breadcrumb-base: documentation
permalink: "/write-stories/"
---

_ProStyle_ makes it easy to turn your stories into animated web content.  You write your stories using a simple text-based language, point _ProStyle_ at it, and your story will come to life.  The animations can be added to any HTML document, including web pages and web applications.  All you need is a text editor and a little creativity.

## Getting Started

### Step #1

* Download the latest version as a __.zip__ file from the [Releases page](https://github.com/ProGraphics/prostyle.js/releases).
* Open examples.html in a modern web browser and look around.

_<span style="margin-left:50px;padding:15px;background-color:#FFE;">If you like ProStyle, please STAR us on GitHub!</span>_


### Step #2

* Hook up your HTML page

<div class="row">
	<div class="small-12 medium-9 large-7 columns">

<div class="play-story" style="font-weight:bold;color:#FFF;">index.html</div>
{% highlight html %}
<!DOCTYPE html>
<html>
	<head>
		<title>My Animated Story</title>
		<script src="pro.greensock.min.js"></script>
		<script src="prostyle.min.js"></script>
	</head>
	<body>
		<div data-prostyle="myStory"></div>
	</body>
	<script src="myStory.js"></script>
</html>
{% endhighlight %}

	</div>
</div>


### Step #3

* Write your story [JSON](/concepts/#json) and assign it to <code>ProStyle.Stories</code>
* Of course, the story could be inline in your HTML file if you'd prefer

<div class="row">
	<div class="small-12 medium-9 large-7 columns">
	
<div class="play-story" style="font-weight:bold;color:#FFF;">myStory.js</div>
{% highlight javascript %}
ProStyle.Stories.myStory = {
    item: {
		text: "My Story"
		action: {
			animation: { duration:5 },
			rotation: 360
		}
	}
};
{% endhighlight %}

	</div>
</div>


### Step #4

* Learn more by reading the documentation
 1. [Concepts](/concepts/)
 2. [Models](/models/)
 3. [Properties](/properties/)
 4. [Controllers](/controllers/)
 5. [Extensions](/extensions/)

<br><br>
_<a href="https://github.com/ProGraphics/prostyle.js"><span style="margin:15px;background-color:#FFC;">If you like ProStyle, please STAR us on GitHub</span></a>_