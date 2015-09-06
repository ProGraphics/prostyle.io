<p class="b20" markdown="1">
An image URL. Relative paths will be appended to the global <code>ProStyle.mediaRootUrl</code> and the [canvas](#){:data-toc="canvas"} <code>mediaUrl</code> if they are defined.  Data URIs may be used for embedded images.</p>

* _alias_: <code>img</code>
* _alias_: <code>url</code>

{% highlight javascript %}
{
	src: "logo.png"
}
{% endhighlight %}

{% highlight javascript %}
{
	src: "url(logo.png)"
}
{% endhighlight %}